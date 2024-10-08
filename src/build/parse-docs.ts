import {Plugin} from "vite"
import {XMLParser} from "fast-xml-parser"
import * as fs from "fs"
import {Doc} from "../model/documentation.ts";
import {Alias, Mudlet} from "../model/mudlet.ts";
import assert from "node:assert"

assert(process.env.DOCS_FILE, "Environmental variable DOCS_FILE must be provided.")
assert(process.env.DOCS_FILE, "Environmental variable XML_FILE must be provided.")


function collectRegexes(aliasPackage: Alias[] | undefined, prefix: string): Alias[] {
    const result: Alias[] = [];
    if (aliasPackage === undefined || !Array.isArray(aliasPackage)) {
        return result;
    }
    aliasPackage.forEach((item) => {
        item.key = prefix + item.name
        result.push(item)
        collectRegexes(item.Alias, item.key + '.').forEach(item => result.push(item))
        collectRegexes(item.AliasGroup, item.key + '.').forEach(item => result.push(item))
    })
    return result
}

function collectDocs(): Doc[] {
    const docs = fs.readFileSync(process.env.DOCS_FILE!).toString().split("\n").map(item => item.trim()).filter(item => item != '')
    const result: Doc[] = [];
    let currentElement: Doc = {alias: '', description: [], matches: []};
    for (let index = 0; index < docs.length; index++) {
        const element = docs[index];
        if (element.startsWith("##")) {
            currentElement = {alias: element.substring(2).trim().replace(new RegExp(/`(.+?)`/g), "$1"), description: [], matches: []}
            result.push(currentElement)
        } else {
            currentElement.description.push(element)
        }
    }
    return result;
}


export default function parseDocs(): Plugin {
    return {
        name: 'parse-docs',
        buildStart() {
            const parser = new XMLParser();
            const mudletXml = fs.readFileSync(process.env.XML_FILE!).toString().trim()
            const result: Mudlet = parser.parse(mudletXml, true);

            const aliases = result.MudletPackage.AliasPackage.AliasGroup
            const flat = collectRegexes(aliases, '').filter(item => item.regex !== undefined && item.regex !== '')

            const docs = collectDocs();

            docs.map(item => item.matches = flat.filter(alias => new RegExp(alias.regex).test(item.alias.split(",")[0].trim())))
            fs.writeFileSync('docs.json', JSON.stringify(docs))

            const keysWithHelp = docs.flatMap(doc => doc.matches.map(match => match.key))
            const noHelp = flat.filter(doc => keysWithHelp.indexOf(doc.key) <= -1)
            fs.writeFileSync('nohelp.json', JSON.stringify(noHelp))
            console.log("Docs generation completed")
        }
    }
}