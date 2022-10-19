import React from 'react'
import { Box, Text, ChakraProvider, Heading } from '@chakra-ui/react'
import axios from 'axios'
import { BASE_URL } from "../constants/urls"
import customTheme from '../theme/Theme'
import SW from '../assets/Star-wars-logo-new-tall.webp'

class CharacterList extends React.Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    this.getAllCharacters()
  }

  getAllCharacters = () => {
    axios.get(`${BASE_URL}/people`)
    .then((res) => this.setState({characters: res.data.results}))    
    .catch((err) => console.log(err.response))
  }

  render() {
    const mappedCharacters = this.state.characters.map((character) => {
      return(
        <>
          <Box 
            key={character.url}
            onClick={() => this.props.goToDetailsPage(character.url)}
            color='#ffe81f'
            fontSize='22px'
            cursor={'pointer'}
            border= '1px' solid 
            borderColor='gray'
            w='17rem'
            _hover={{
              bg:'gray'
            }}
            >
            {character.name}
          </Box>
        </>
        )
    })
    return (
      <ChakraProvider theme={customTheme}>    
        <Box
          fontFamily={'mono'}
          pos="relative"
          w='100vw'
          h="100vh"
          bgImage={SW}
          py='7rem'
          px={'5rem'}
          >
            <Heading color='whitesmoke' fontWeight={800}>May the Force be with you!</Heading>
            <Text py='1rem' color='gray' fontSize={'1.5rem'}>Click in the characters and see some details</Text>  
            {mappedCharacters}
        </Box>
        
      </ChakraProvider>
    )
  }
}

export default CharacterList