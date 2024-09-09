import { flattenAttributes } from '.'
import { isTextSimilarToText } from '.'

/**
Method for searching a list of objects where the final attribute in the attribute list is similar to a query string
* @param items - List of elements on wich the search will be performed
* @param attributes - List of attibutes to travel before compare the query
* @param query - text to be compared with the last attibute in the attribute list
* @returns List of filtered objects
*/
export const filterItemsHierarchicallyByQuery = <T extends object>(
  items: T[],
  attributes: (keyof T)[],
  query: string,
): T[] => {
  if (!attributes.length || !items.length || !query) return []

  return items.filter((item) =>
    matchesQueryInHierarchy(item, attributes, query),
  )
}

export const matchesQueryInHierarchy = <T extends object>(
  item: T,
  attributes: (keyof T)[],
  query: string,
): boolean => {
  if (attributes.length === 0) return false
  let values: T[] = [item]

  for (let i = 0; i < attributes.length - 1; i++) {
    values = flattenAttributes(values, attributes[i])
  }

  return isFinalAttributeMatch(values, attributes[attributes.length - 1], query)
}

export const isFinalAttributeMatch = <T extends object>(
  items: T[],
  attribute: keyof T,
  query: string,
): boolean => {
  return items.some((item) =>
    isTextSimilarToText((item[attribute] as string) || '', query),
  )
}
