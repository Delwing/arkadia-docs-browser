export interface Alias {
    key: string,
    name: string
    script: string,
    command: string,
    packageName: string,
    regex: string
    AliasGroup?: Alias[],
    Alias?: Alias[]
}

export interface AliasPackage {
    AliasGroup: Alias[]
}

export interface  MudletPackage {
    AliasPackage: AliasPackage
}


export interface Mudlet {
    MudletPackage: MudletPackage
}