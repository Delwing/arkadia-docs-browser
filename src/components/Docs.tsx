import DocComponent from "./Doc.tsx"

import docs from "../../docs.json"
import {Doc} from "../model/documentation.ts";


function textFilter(filter: string) {
    return (alias: Doc) => alias.alias.indexOf(filter) > -1;
}

function regexFilter(filter: string) {
    return (alias: Doc) => new RegExp(alias.matches[0].regex).test(filter);
}

function Docs({filter, regex}: { filter: string, regex: boolean }) {


    const docRender = docs
        .filter(alias => filter == "" || (regex ? regexFilter(filter) : textFilter(filter))(alias))
        .map(doc => <DocComponent key={doc.alias} doc={doc}></DocComponent>)
    return (
        <>
            {docRender}
        </>
    )
}

export default Docs