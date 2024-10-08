import {Button, Container, Form, InputGroup, Navbar, NavbarText} from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"

import Docs from "./components/Docs"
import MissingDocs from "./components/MissingDocs"
import {useState} from "react";

function App() {

    const [filter, setFilter] = useState<string>('');
    const [regexp, setregexp] = useState<boolean>(false)

    return (
        <>
            <Navbar className="navbar navbar-dark bg-dark shadow border-bottom border-secondary-subtle">
                <Container className="d-flex align-content-around">
                    <NavbarText>
                        <h2>Arkadia Skrypty - Aliasy</h2>
                    </NavbarText>
                    <Form className={'w-50'}>
                        <InputGroup>
                            <Form.Control placeholder={'Filtruj...'} type="text"
                                          onChange={(e) => setFilter(e.target.value)}/>
                            <Button variant={(regexp ? 'primary' : 'secondary')} onClick={() => setregexp(!regexp)}>Filtrowanie
                                regex</Button>

                        </InputGroup>
                    </Form>
                </Container>
            </Navbar>
            <Container>
                <Docs filter={filter} regex={regexp}/>
                <h3 className={'mt-4'}>Brakujące dokumentacje</h3>
                <MissingDocs/>
            </Container>
        </>
    )
}

export default App
