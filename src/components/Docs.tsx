import DocComponent from "./Doc.tsx"

import docs from "../../docs.json"

function Docs() {

    const docRender = docs.map(doc => <DocComponent key={doc.alias} doc={doc}></DocComponent>)
    return (
        <>
            {docRender}
        </>
    )
}

export default Docs