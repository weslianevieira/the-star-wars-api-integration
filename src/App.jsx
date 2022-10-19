import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import CharacterDetails from './pages/CharacterDetails'
import CharacterList from './pages/CharacterList'

class App extends React.Component {
  state = {
    actualScreen: 'home',
    clickedCharacterUrl: '',
    clickedFilmUrl: '',
  }

  goToListPage = () => {
    this.setState({actualScreen: 'home', clickedCharacterUrl: ''})
  }

  goToDetailsPage = (url) => {
    this.setState({actualScreen: 'details', clickedCharacterUrl: url, clickedFilmUrl: url})
  }

  switchScreen = () => {
    if(this.state.actualScreen === 'home') {
      return <CharacterList goToDetailsPage={this.goToDetailsPage}/>
    } else {
      return <CharacterDetails goToListPage={this.goToListPage} characterUrl={this.state.clickedCharacterUrl} filmUrl={this.state.clickedFilmUrl}/>
    }
  }
  render() {
    return (
      <Center>
        <Box>{this.switchScreen()}</Box>
      </Center>
    )
  }
}

export default App
