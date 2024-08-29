import { filterItemsByQuery, flatItemsByLevel } from '@/utils'
import { useState } from 'react'

interface Key {
  paths: string[]
  level: string
}

interface Attributes<T> {
  items: T[]
  key: Key
  query: string
}

export const useSearch = <T>({ items, key, query }: Attributes<T>) => {
  const [results, setResults] = useState<T[]>([])

  const resetResults = () => {
    setResults([])
  }

  const filterItems = () => {
    const filteredItems: T[] = []

    key.paths.forEach((path: string) => {
      const level = key.level
      const attributes: string[] = path.split('.')

      const itemsOrderedByLevel = orderItemsByLevel(items, attributes, level)
      filteredItems.unshift(
        ...filterItemsByQuery(itemsOrderedByLevel, attributes, query),
      )
    })

    setResults(filteredItems)
  }

  return { results, filterItems, resetResults }
}
