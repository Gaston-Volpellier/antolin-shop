import './App.css'
import GridContainer from './components/navigation/GridContainer/GridContainer'
import DrawerAppBar from './components/navigation/Toolbar/Toolbar'

const App = () => {
  return (
    <div className="App">
      <DrawerAppBar />
      <GridContainer></GridContainer>
    </div>
  )
}

export default App
