import React from 'react'
import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { BASE_URL } from "../constants/urls"

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
            onClick={() => this.props.goToDetailsPage(character.url)}>
            {character.name}
          </Box>
        </>
        )
    })
    return (
      <Box
        >
        {mappedCharacters}
      </Box>
    )
  }
}

export default CharacterList