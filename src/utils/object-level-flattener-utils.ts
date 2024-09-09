import { flattenAttributes } from '.'

/** 
Method to restructure the objects format inside a list according to an existing property in its hierarchy of composition
* @param {T[]} items - List of elements on wich the search will be performed  
* @param {string[]} attributes - List of attributes thath indicate the hierarchy of properties to traverse before reaching the evaluation term
* @param {string} level - Property that determine the format of objects in result list  
* @returns {S[]} - Result list
*/
export const flatItemsHierarchically = <T extends object, S extends T>(
  items: T[],
  attributes: (keyof T)[],
  level: string,
): S[] => {
  if (
    !attributes.includes(level as keyof T) ||
    !attributes.length ||
    !level ||
    !items.length
  )
    return []

  return items.flatMap((item) =>
    extractItemsAtLevel(item, attributes, level),
  ) as S[]
}

const extractItemsAtLevel = <T extends object>(
  item: T,
  attributes: (keyof T)[],
  level: string,
) => {
  let result = [item]

  for (const attribute of attributes) {
    result = flattenAttributes(result, attribute)
    if (attribute === level) break
  }

  return result
}
