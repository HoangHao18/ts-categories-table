import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TableData } from './Component/TableData'

const initData = [{id: "0", name: "Category 01", isUsed: 0, date: (new Date()).toDateString()}, {id: "1", name: "Category 02", isUsed: 0, date: (new Date()).toDateString()}]
function App() {
  
  return (
    <div className="App">
      <TableData listCategories = {initData}/>
    </div>
  )
}

export default App
