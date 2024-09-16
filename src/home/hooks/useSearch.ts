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
 *     "code": 2010010,
 *     "name": "INTRODUCCION A LA PROGRAMACION",
 *     "groups": [
 *       {
 *         "code": "1",
 *         "teacher": "SALAZAR SERRUDO CARLA",
 *         "schedule": []
 *       }
 * },
 * {
 *     "code": 2010015,
 *     "name": "SISTEMAS I",
 *     "groups": [
 *       {
 *         "code": "2",
 *         "teacher": "FIORILO LOZADA AMERICO",
 *         "schedule": []
 *       }]
 * },
 *  {
 *      "code": 2010018,
 *      "name": "SISTEMAS DE INFORMACION I",
 *      "groups": [
 *        {
 *          "code": "1",
 *          "teacher": "SALAZAR SERRUDO CARLA",
 *          "schedule": []
 *        }]
 * },
 * {
 *    "code":2016092,
 *    "name":"PLANIFICACION Y EVALUACION DE PROYECTOS",
 *    "groups":[
 *       {
 *         "code": "3",
 *         "teacher": "JALDIN ROSALES K. ROLANDO",
 *         "schedule": []
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
 * //    "code": 2010010,
 * //    "name": "INTRODUCCION A LA PROGRAMACION",
 * //    "groups": [
 * //      {
 * //        "code": "1",
 * //        "teacher": "SALAZAR SERRUDO CARLA",
 * //        "schedule": []
 * //      }
 * // },
 * // {
 * //     "code": 2010018,
 * //     "name": "SISTEMAS DE INFORMACION I",
 * //     "groups": [
 * //       {
 * //         "code": "1",
 * //         "teacher": "SALAZAR SERRUDO CARLA",
 * //         "schedule": []
 * //       }]
 * // },
 * // {
 * //   "code":2016092,
 * //   "name":"PLANIFICACION Y EVALUACION DE PROYECTOS",
 * //   "groups":[
 * //      {
 * //        "code": "3",
 * //        "teacher": "JALDIN ROSALES K. ROLANDO",
 * //        "schedule": []
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
