import { renderHook, act } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useSearch } from '@/pages/home/hooks'

import systemsEngineerData from '@/__test__/data/systems-engineer.json'

describe('useSearch hook', () => {
  it('should initialize with empty results', () => {
    const items = systemsEngineerData.levels
    const key = {
      paths: ['subjects.name', 'subjects.groups.teacher'],
      level: 'subjects',
    }
    const query = 'movil'

    const { result } = renderHook(() => useSearch({ items, key, query }))
    expect(result.current.results).toEqual([])
  })

  it('should handle empty key paths', () => {
    const items = systemsEngineerData.levels
    const emptyKey = { paths: [], level: '' }
    const query = 'movil'

    const { result } = renderHook(() =>
      useSearch({ items, key: emptyKey, query }),
    )

    act(() => {
      result.current.filterItems()
    })

    expect(result.current.results).toEqual([])
  })

  it('should handle empty items array', () => {
    const key = {
      paths: ['subjects.name', 'subjects.groups.teacher'],
      level: 'subjects',
    }
    const query = 'movil'

    const { result } = renderHook(() => useSearch({ items: [], key, query }))

    act(() => {
      result.current.filterItems()
    })

    expect(result.current.results).toEqual([])
  })

  it('should reset results to empty', () => {
    const items = systemsEngineerData.levels
    const key = {
      paths: ['subjects.name', 'subjects.groups.teacher'],
      level: 'subjects',
    }
    const query = 'movil'

    const { result } = renderHook(() => useSearch({ items, key, query }))

    act(() => {
      result.current.filterItems()
    })

    act(() => {
      result.current.resetResults()
    })

    expect(result.current.results).toEqual([])
  })

  it('should return an empty list if the level does not exist in items hierarchy', () => {
    const items = systemsEngineerData.levels
    const key = {
      paths: ['subjects.name', 'subjects.groups.teacher'],
      level: 'semester',
    }
    const query = 'movil'

    const { result } = renderHook(() => useSearch({ items, key, query }))

    act(() => {
      result.current.filterItems()
    })

    act(() => {
      result.current.resetResults()
    })

    expect(result.current.results).toEqual([])
  })

  it('should return a list with the correct object format', () => {
    const items = systemsEngineerData.levels
    const key = {
      paths: ['subjects.name', 'subjects.groups.teacher'],
      level: 'subjects',
    }
    const query = 'movil'

    const subjectProperties = ['code', 'groups', 'name']

    const { result } = renderHook(() => useSearch({ items, key, query }))

    act(() => {
      result.current.filterItems()
    })

    let isMatch = true

    Object.keys(result.current.results[0]).forEach((attribute) => {
      if (!subjectProperties.includes(attribute)) {
        isMatch = false
      }
    })

    expect(isMatch).toEqual(true)
  })

  it('should return a list of result given a valid mixed case query ', () => {
    const items = systemsEngineerData.levels
    const key = {
      paths: ['subjects.name', 'subjects.groups.teacher'],
      level: 'subjects',
    }
    const query = 'movil'

    const { result } = renderHook(() => useSearch({ items, key, query }))

    act(() => {
      result.current.filterItems()
    })
    expect(result.current.results.length).toBeGreaterThanOrEqual(1)
  })
})
