import React from 'react'
import {
  Box,
  Center,
  Button,
  Container,
  Image
} from '@chakra-ui/react';
import axios from 'axios'
import SW from '../assets/Star-wars-logo-new-tall.webp'

class CharacterDetails extends React.Component {
  state = {
    character: {},
    planet: '',
  }

  componentDidMount() {
    this.getCharacter()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.character !== prevState.character) {
      this.getPlanet()
    }
  }

  getCharacter = () => {
    axios.get(this.props.characterUrl)
    //em caso de sucesso, guardar info no estado 
    .then((res) => this.setState({character: res.data}))
    .catch((err) => console.log(err.response))
  }

  getPlanet = () => {
    axios.get(this.state.character.homeworld)
    .then((res) => this.setState({planet: res.data.name}))
    .catch((err) => console.log(err.response))
  }


  render() {
    return (
      <Center py={'5rem'}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={'#1B1C1E'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mb={6}
            pos={'relative'}>
            <Image 
              src={SW}
              layout={'fill'}
            />
          </Box>
          <Container py={5} color={'#ffe81f'} fontFamily={'mono'}>
            <Box>Name: {this.state.character.name} </Box>          
            <Box>Natal Planet: {this.state.planet} </Box>
            <Box>Gender: {this.state.character.gender} </Box>
            <Box>Birth Year: {this.state.character.birth_year} </Box> 
            <Box>Height: {this.state.character.height} </Box> 
            <Box>Mass: {this.state.character.hair_color} </Box> 
            <Box>Skin Color: {this.state.character.skin_color} </Box> 
            <Box>Eye Color: {this.state.character.eye_color} </Box> 
          </Container>
          <Button onClick={this.props.goToListPage}>← Characters List</Button>
        </Box>                  
      </Center>
    )
  }
}

export default CharacterDetails