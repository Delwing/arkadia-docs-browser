
import noHelp from "../../nohelp.json"

function RenderMissing() {
    const renderMissing = noHelp.map(item => <div key={item.key}>
        {item.key} {"->"} {item.regex}
    </div>)
    return (
        <div>
            {renderMissing}
        </div>
    )
}

export default RenderMissing