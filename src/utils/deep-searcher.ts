import { isTextSimilarToText } from '.'

/** 
Method to restructure the objects format inside a list according to an existing property in its hierarchy of composition
* @param {T[]} items - List of elements on wich the search will be performed  
* @param {string[]} attributes - List of attributes thath indicate the hierarchy of properties to traverse before reaching the evaluation term
* @param {string} level - Property that determine the format of objects in result list  
* @returns {S[]} - Result list
*/
export const orderItemsByLevel = <T extends object, S extends T>(
  items: T[],
  attributes: (keyof T)[],
  level: string,
): S[] => {
  if (
    !attributes.includes(level as keyof T) ||
    attributes === null ||
    attributes.length === 0 ||
    level === null ||
    level.length === 0 ||
    items === null ||
    items.length === 0
  )
    return []

  return items.flatMap((item) => {
    let value = [item]

    for (const attribute of attributes) {
      value = value.flatMap((val) => (val[attribute] as T) || [])
      if (attribute === level) break
    }

    return value
  }) as S[]
}

/**
Method for searching a list of objects where the final attribute in the attribute list is similar to a query string
* @param items - List of elements on wich the search will be performed
* @param attributes - List of attibutes to travel before compare the query
* @param query - text to be compared with the last attibute in the attribute list
* @returns List of filtered objects
*/
export const filterItemsByQuery = <T extends object>(
  items: T[],
  attributes: (keyof T)[],
  query: string,
): T[] => {
  if (
    attributes === null ||
    attributes.length === 0 ||
    items === null ||
    items.length === 0 ||
    query === null
  )
    return []

  return items.filter((item) => {
    let value = new Array(item)
    let isValid = false

    attributes.forEach((attribute, index) => {
      if (index < attributes.length - 1) {
        value = value.flatMap((val) => (val[attribute] as T) || val)
      } else {
        if (typeof value[0] !== 'object') {
          isValid = isTextSimilarToText(value[0], query.toUpperCase())
        } else {
          isValid = value.some((val) =>
            isTextSimilarToText(val[attribute] as string, query),
          )
        }
      }
    })
    return isValid
  })
}
