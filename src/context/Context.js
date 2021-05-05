import React, { createContext } from "react"

export const Context = createContext()

const ContextProvider = props => {
  const formatDate = date => {
    const newDate = date.split("-")
    const year = newDate[0]
    const month = newDate[1]
    const day = newDate[2].split("T")
    console.log(newDate)
    return `${month}/${day[0]}/${year}`
  }

  return (
    <Context.Provider value={{ formatDate }}>{props.children}</Context.Provider>
  )
}

export default ContextProvider
