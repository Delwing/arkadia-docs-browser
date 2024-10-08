import {Doc} from "../model/documentation.ts";
import {Converter} from "showdown"
import {Form, InputGroup} from "react-bootstrap";
import {useState} from "react";
import {CheckCircle, Link, SlashCircle} from "react-bootstrap-icons";

function Docs({doc}: { doc: Doc }) {

    const [match, setMatch] = useState(false)
    const [hover, setHover] = useState(false)

    return (
        <div className={'mt-4'} id={doc.alias}>
            <div>
                <h5 className="ps-1 pb-1 border-bottom font-monospace" onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}>
                    {doc.alias}
                    <a className={'ms-2 link-light' + (hover ? '' : ' invisible')} style={{left: '-40px'}}
                       href={`#${doc.alias}`}><Link/>
                    </a>
                </h5>
            </div>
            <div className={'p-1'}>
                <p dangerouslySetInnerHTML={{__html: new Converter({}).makeHtml(doc.description.join("\n"))}}></p>
                <div className={'d-flex justify-content-start align-items-baseline'}>
                        Regex:
                        <code className={'ms-2'}>
                            {doc.matches[0].regex}
                        </code>
                </div>
                <Form className={'mt-2'}>
                    <InputGroup className="mb-3 input-group-sm">
                        <InputGroup.Text>Przetestuj</InputGroup.Text>
                        <Form.Control type="text" placeholder=""
                                      onKeyUp={(event) => setMatch(new RegExp(doc.matches[0].regex).test(event.currentTarget.value))}/>
                        <InputGroup.Text>{match ? <CheckCircle className={'text-success'}/> :
                            <SlashCircle className={'text-danger'}/>}</InputGroup.Text>
                    </InputGroup>
                </Form>
                <p></p>
            </div>
        </div>
    )
}

export default Docs