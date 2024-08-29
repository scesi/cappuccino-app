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

export const useSearch = <T extends object>({
  items,
  key,
  query,
}: Attributes<T>) => {
  const [results, setResults] = useState<T[]>([])

  const resetResults = () => {
    setResults([])
  }

  const filterItems = () => {
    const filteredItems: T[] = []

    key.paths.forEach((path: string) => {
      const level = key.level
      const attributes = path.split('.') as (keyof T)[]

      const itemsOrderedByLevel = flatItemsByLevel(items, attributes, level)
      filteredItems.unshift(
        ...filterItemsByQuery(itemsOrderedByLevel, attributes, query),
      )
    })

    setResults(filteredItems)
  }

  return { results, filterItems, resetResults }
}
