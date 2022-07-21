import { useState } from "react"
import { CategoryItem, FormDataProps } from "./type"

//const initNewCategory : CategoryItem= {id: "", name: "", isUsed: 0, date: (new Date()).toDateString()}
export const FormData:React.FC<FormDataProps>  = ({initData, isEdit, onSubmit}) =>{
    const [categorySetting, setCategorySetting] = useState<CategoryItem>(initData)
    // useEffect(()=>{
    //     setCategorySetting(initData)
    // })
    return <div>
        {
          isEdit && (
              <>
                  <div>
                      <label htmlFor="id">ID: </label>
                      <input type="text" id="id" value={categorySetting.id} disabled></input>
                  </div>
                  <div>
                      <label htmlFor="No">No: </label>
                      <input type="number" id="no" value={categorySetting.no} disabled></input>
                  </div>
              </>
          )
        }
        <div>
          <label htmlFor="name">Category Name: </label>
          <input type="text" id="name" value={categorySetting.name} onChange={(e)=>setCategorySetting({...categorySetting, name: e.target.value})}></input>
        </div>

        <div>
          <label htmlFor="isUsed">IsUsed: </label>
          <input type="radio" id="used" name="isUsed" value={1} checked={categorySetting.isUsed === 1} onChange={(e)=>setCategorySetting({...categorySetting, isUsed: 1})}/>
          <label htmlFor="used"> Used</label>
          <input type="radio" id="notUsed" name="isUsed" value={0} checked={categorySetting.isUsed === 0} onChange={(e)=>setCategorySetting({...categorySetting, isUsed: 0})}/>
          <label htmlFor="notUsed"> Not Used</label>
        </div>  

        <div>
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" name="date" onChange={(e)=>setCategorySetting({...categorySetting, date: e.target.value})}/>
        </div>

        <div>
          <button onClick={()=>onSubmit(categorySetting)}>Save</button>
        </div>    
    </div>
}