import { useState } from 'react'

import { flatItemsHierarchically } from '@/utils/object-level-flattener-utils'
import { filterItemsHierarchicallyByQuery } from '@/utils/filter-utils'

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
      const attributes = path.split('.') as (keyof T)[]
      const level = key.level

      const itemsRestructuredByLevel = flatItemsHierarchically(
        items,
        attributes,
        level,
      )

      filteredItems.unshift(
        ...filterItemsHierarchicallyByQuery(
          itemsRestructuredByLevel,
          attributes,
          query,
        ),
      )
    })

    setResults(filteredItems)
  }

  return { results, filterItems, resetResults }
}
