import { Container } from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"

import Docs from "./components/Docs"
import MissingDocs from "./components/MissingDocs"


function App() {

  return (
    <>
      <Container>
        <Docs />
        <h3 className={'mt-4'}>Brakujące dokumentacje</h3>
        <MissingDocs />
      </Container>
    </>
  )
}

export default App
