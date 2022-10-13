import React from 'react'
import { Box, Button } from '@chakra-ui/react'

class CharacterDetails extends React.Component {
  render() {
    return (
      <Box>
        <Button onClick={this.props.goToListPage}>Ir Para Lista dos Personagens</Button>
      </Box>
    )
  }
}

export default CharacterDetails