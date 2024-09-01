import { isTextSimilarToText } from '.'

/** 
Method to restructure the objects format inside a list according to an existing property in its hierarchy of composition
* @param {T[]} items - List of elements on wich the search will be performed  
* @param {string[]} attributes - List of attributes thath indicate the hierarchy of properties to traverse before reaching the evaluation term
* @param {string} level - Property that determine the format of objects in result list  
* @returns {S[]} - Result list
*/
export const flatItemsByLevel = <T extends object, S extends T>(
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
    getItemExtractionLevel(item, attributes, level),
  ) as S[]
}

const getItemExtractionLevel = <T extends object>(
  item: T,
  attributes: (keyof T)[],
  level: string,
) => {
  let value = [item]

  for (const attribute of attributes) {
    value = flattenAttributes(value, attribute)
    if (attribute === level) break
  }

  return value
}

const flattenAttributes = <T extends object>(
  value: T[],
  attribute: keyof T,
): T[] => {
  return value.flatMap((val) => (val[attribute] as T[]) || val)
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
  if (!attributes.length || !items.length || !query) return []

  return items.filter((item) =>
    matchesQueryInHierarchy(item, attributes, query),
  )
}

const matchesQueryInHierarchy = <T extends object>(
  item: T,
  attributes: (keyof T)[],
  query: string,
) => {
  if (attributes.length === 0) return false
  let value = [item]
  let isValid = false

  attributes.forEach((attribute, index) => {
    if (index < attributes.length - 1) {
      value = flattenAttributes(value, attribute)
    } else {
      isValid = isFinalAttributeMatch(value, attribute, query)
    }
  })
  return isValid
}

const isFinalAttributeMatch = <T extends object>(
  values: T[],
  attribute: keyof T,
  query: string,
): boolean => {
  if (typeof values[0] !== 'object') {
    return isTextSimilarToText(values[0], query)
  } else {
    return values.some((val) =>
      isTextSimilarToText((val[attribute] as string) || '', query),
    )
  }
}
