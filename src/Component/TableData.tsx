import { useEffect, useState } from "react";
import { RowTable } from "./RowTable";
import { CategoryItem, TableDataProps } from "./type";

const initNewCategory : CategoryItem= {id: "", name: "", isUsed: 0, date: (new Date()).toDateString()}

export const TableData: React.FC<TableDataProps> = ({listCategories}) => {
  const [categories, setCategories] = useState<CategoryItem[]>(listCategories)
  const [newCategory, setNewCategory] = useState<CategoryItem>(initNewCategory)

  const handleAddCategory = () => {
    console.log("newCategory : ",newCategory)
    const temp:Array<CategoryItem> = [...categories, newCategory]
    setCategories(temp)
    setNewCategory(initNewCategory)
  }
  const handleDeleteCategory = (id: string) =>{
    const temp:Array<CategoryItem> = categories.filter((item) => item.id !== id)
    setCategories(temp)
    console.log(id)
  }
  useEffect(()=>{
    console.log("u newCategory: ",newCategory)
  },[newCategory])
  return <div>
    <div>CATEGORIES</div>
    <div>
      <>
        <div>
          <label htmlFor="id">Id: </label> 
          <input type="string" id="id" value={newCategory.id} onChange={(e)=>setNewCategory({...newCategory, id: e.target.value})}></input>
        </div>

        <div>
          <label htmlFor="name">Category Name: </label>
          <input type="text" id="name" value={newCategory.name} onChange={(e)=>setNewCategory({...newCategory, name: e.target.value})}></input>
        </div>

        <div>
          <label htmlFor="isUsed">IsUsed: </label>
          <input type="radio" id="used" name="isUsed" value={1} checked={newCategory.isUsed === 1} onChange={(e)=>setNewCategory({...newCategory, isUsed: 1})}/>
          <label htmlFor="used"> Used</label>
          <input type="radio" id="notUsed" name="isUsed" value={0} checked={newCategory.isUsed === 0} onChange={(e)=>setNewCategory({...newCategory, isUsed: 0})}/>
          <label htmlFor="notUsed"> Not Used</label>
        </div>  

        <div>
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" name="date" onChange={(e)=>setNewCategory({...newCategory, date: e.target.value})}/>
        </div>

        <div>
          <button onClick={handleAddCategory}>Add</button>
        </div>    
      </>
    </div>
    <div>
      <table>
        <thead>
         <tr>
          <th>No</th>
            <th>Category Name</th>
            <th>IsUsed</th>
            <th>Date</th>
            <th></th>
         </tr>
        </thead>
        {
            categories?.length > 0 ?
            <tbody>
              {
                categories.map(
                  (item) => <RowTable key={item.id} data={item} onDelete={()=>handleDeleteCategory(item.id)}/>
                )
              }
            </tbody> :
            <tbody><tr><td colSpan={5}>No Category</td></tr></tbody>
          }
        <tbody>
          
        </tbody>
      </table>
    </div>
  </div>;
};
