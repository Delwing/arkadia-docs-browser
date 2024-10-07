import {Container, Form, Navbar, NavbarText} from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"

import Docs from "./components/Docs"
import MissingDocs from "./components/MissingDocs"
import {useState} from "react";


function App() {

    const [filter, setFilter] = useState<string>('');

    return (
        <>
            <Navbar className="navbar navbar-dark bg-dark shadow border-bottom border-secondary-subtle">
                <Container className="d-flex align-content-around">
                    <NavbarText>
                        <h2>Arkadia Skrypty - Aliasy</h2>
                    </NavbarText>
                    <Form.Control placeholder={'Filtruj...'} className={'d-inline w-25'} type="text" onChange={(e) => setFilter(e.target.value)} />
                </Container>
            </Navbar>
            <Container>
                <Docs filter={filter}/>
                <h3 className={'mt-4'}>Brakujące dokumentacje</h3>
                <MissingDocs/>
            </Container>
        </>
    )
}

export default App
