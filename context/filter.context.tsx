import React, { useState, createContext } from 'react'


export interface FilterContextData {
  filter: string
  setFilter(any): void
  currentPage: number
  setCurrentPage(any): void
}


const FilterContext = createContext({} as FilterContextData)

const FilterContextProvider: React.FC = ({ children }) => {
  const [ currentPage, setCurrentPage] = useState<number>(1)
  const [ filter, setFilter] = useState<string>('')
  return (
    <FilterContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        filter,
        setFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterContextProvider }