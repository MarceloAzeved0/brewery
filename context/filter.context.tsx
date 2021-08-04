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


  const setFilterPage = (value: string) => {
    setFilter(value)
    typeof(sessionStorage) !== 'undefined' && sessionStorage.setItem('filter', value);
  }

  const setPage = (value: number) => {
    setCurrentPage(value)
    typeof(sessionStorage) !== 'undefined' && sessionStorage.setItem('page', value.toString());
  }

  return (
    <FilterContext.Provider
      value={{
        currentPage,
        setCurrentPage:setPage,
        filter,
        setFilter: setFilterPage
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterContextProvider }