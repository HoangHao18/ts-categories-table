import { useState } from "react"
import { CategoryItem, NewDataProps } from "./type"

//const initNewCategory : CategoryItem= {id: "", name: "", isUsed: 0, date: (new Date()).toDateString()}
export const NewData:React.FC<NewDataProps>  = ({initData, isEdit, onSubmit}) =>{
    const [newCategory, setNewCategory] = useState<CategoryItem>(initData)
    // useEffect(()=>{
    //     setNewCategory(initData)
    // })
    return <div>
        {
            isEdit && (
                <>
                    <div>
                        <label htmlFor="id">ID: </label>
                        <input type="text" id="id" value={newCategory.id} disabled></input>
                    </div>
                    <div>
                        <label htmlFor="No">No: </label>
                        {/* <input type="number" id="no" value={newCategory.no} disabled></input> */}
                    </div>
                </>
            )
        }
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
          <button onClick={()=>onSubmit(newCategory)}>Add</button>
        </div>    
    </div>
}