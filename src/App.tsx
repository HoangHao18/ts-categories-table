import './App.css'
import { TableData } from './Component/TableData'

const initData = [{id: "0", name: "Category 01", isUsed: 0, date: ( new Date()).toDateString(), no: 0}, {id: "1", name: "Category 02", isUsed: 0, date: (new Date()).toDateString(), no: 1}]
function App() {
  
  return (
    <div className="App">
      <TableData listCategories = {initData}/>
    </div>
  )
}

export default App
