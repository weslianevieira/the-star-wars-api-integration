import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import CharacterDetails from './pages/CharacterDetails'
import CharacterList from './pages/CharacterList'

class App extends React.Component {
  state = {
    actualScreen: 'home'
  }

  goToListPage = () => {
    this.setState({actualScreen: 'home'})
  }

  goToDetailsPage = () => {
    this.setState({actualScreen: 'details'})
  }

  switchScreen = () => {
    if(this.state.actualScreen === 'home') {
      return <CharacterList goToDetailsPage={this.goToDetailsPage}/>
    } else {
      return <CharacterDetails goToListPage={this.goToListPage}/>
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
