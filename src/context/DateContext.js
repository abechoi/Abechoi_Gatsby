import React, { createContext } from "react"

export const DateContext = createContext()

const DateContextProvider = props => {
  const formatDate = date => {
    const newDate = date.split("-")
    const year = newDate[0]
    const month = newDate[1]
    const day = newDate[2].split("T")

    return `${month}/${day[0]}/${year}`
  }

  const test = "this is a test"

  return (
    <DateContext.Provider value={{ formatDate, test }}>
      {props.children}
    </DateContext.Provider>
  )
}

export default DateContextProvider
