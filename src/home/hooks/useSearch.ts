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

/**
 * Hook for generating a list of objects where the last path attibute value is similar to a given query
 *
 * @param items list of items to evaluate
 * @param {Key} key search criteria
 * @param query string to be compared
 *
 * @returns a list of objects where the last path attibute value is similar to a given query
 *
 * @example
 * // Example of a search for subjects where the name or the name of the teacher is similar to the text 'LA'
 *
 * const levels = [
 * {
 *     "name": "INTRODUCCION A LA PROGRAMACION",
 *     "groups": [{
 *         "teacher": "SALAZAR SERRUDO CARLA",
 *       }]
 * },
 * {
 *     "name": "SISTEMAS I",
 *     "groups": [{
 *         "teacher": "FIORILO LOZADA AMERICO",
 *       }]
 * },
 * {
 *    "name":"PLANIFICACION Y EVALUACION DE PROYECTOS",
 *    "groups":[{
 *         "teacher": "JALDIN ROSALES K. ROLANDO",
 *       }]
 *  }
 * ]
 *
 *  const { results, filterItems } = useSearch({
 *   items: testData.levels,
 *   key: {
 *     paths: ['subjects.name', 'subjects.groups.teacher'],
 *     level: 'subjects',
 *   },
 *   query: 'LA',
 * })
 *
 * console.log(results)
 * // output: [
 * // {
 * //    "name": "INTRODUCCION A LA PROGRAMACION",
 * //    "groups": [{
 * //        "teacher": "SALAZAR SERRUDO CARLA",
 * //      }]
 * // },
 * // {
 * //   "name":"PLANIFICACION Y EVALUACION DE PROYECTOS",
 * //   "groups":[{
 * //        "teacher": "JALDIN ROSALES K. ROLANDO",
 * //      }]
 * // }
 * // ]
 */

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
