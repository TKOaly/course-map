export const typedEntries = <K extends string | number | symbol, V>(obj: {
    [key in K]: V
}) => Object.entries(obj) as [K, V][]

export const typedOptionalEntries = <
    K extends string | number | symbol,
    V,
>(obj: {
    [key in K]?: V
}) => Object.entries(obj) as [K, V][]
