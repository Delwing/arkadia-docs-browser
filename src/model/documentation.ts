export interface Alias {
    key: string
    regex: string,
}

export interface Doc {
    alias: string,
    description: string[]
    matches: Alias[]
}