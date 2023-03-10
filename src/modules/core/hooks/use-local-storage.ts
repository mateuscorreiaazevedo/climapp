import React from 'react'

type Response<T> = [
  T,
  (value?: T) => void
]

export function useLocalStorage<T> (key: string, initialValue: T): Response<T> {
  const [state, setState] = React.useState(() => {
    const storage = localStorage.getItem(key)

    if (storage) {
      return JSON.parse(storage)
    } else {
      return initialValue
    }
  })

  const setValue = React.useCallback((value?: T) => {
    setState(value)
    localStorage.setItem(key, JSON.stringify(value))
  }, [])

  return [state, setValue]
}
