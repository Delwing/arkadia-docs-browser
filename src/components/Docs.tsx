import DocComponent from "./Doc.tsx"

import docs from "../../docs.json"

function Docs({filter} : {filter: string}) {

    const docRender = docs
        .filter(alias => filter == "" || alias.alias.indexOf(filter) > -1)
        .map(doc => <DocComponent key={doc.alias} doc={doc}></DocComponent>)
    return (
        <>
            {docRender}
        </>
    )
}

export default Docs