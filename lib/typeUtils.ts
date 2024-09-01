export const typedEntries = <K extends string | number | symbol, V>(obj: {
    [key in K]: V
}) => Object.entries(obj) as [K, V][]

export const typedOptionalEntries = <
    K extends string | number | symbol,
    V,
>(obj: {
    [key in K]?: V
}) => Object.entries(obj) as [K, V][]

export type NestedPaths<NestedObj> = NestedObj extends object
    ? {
          [Key in keyof NestedObj]: `${Exclude<Key, symbol>}${NestedPaths<NestedObj[Key]> extends never ? '' : `.${NestedPaths<NestedObj[Key]>}`}`
      }[keyof NestedObj]
    : never
