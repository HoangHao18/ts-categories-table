import { useState } from "react";
import { NewData } from "./NewData";
import { RowTable } from "./RowTable";
import { CategoryItem, TableDataProps } from "./type";

function creatId() {
  let a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
}

const initNewCategory : CategoryItem= {id: "", name: "", isUsed: 0, date: (new Date()).toDateString()}

export const TableData: React.FC<TableDataProps> = ({listCategories}) => {
  const [categories, setCategories] = useState<CategoryItem[]>(listCategories)
  const [isShowAddNew, setIsShowAddNew] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [itemSetting, setItemSetting] = useState(initNewCategory)
  
  const handleAddCategory = (newCategory: CategoryItem) => {
    const temp:Array<CategoryItem> = [...categories, {...newCategory, id: creatId()}]
    setCategories(temp)
    setIsShowAddNew(false)
  }

  const handleEditCategory = (newCategory: CategoryItem) =>{
    const temp:Array<CategoryItem> = categories.map((item) => {
      if(item.id === newCategory.id) return newCategory
      return item
    })
    setCategories(temp) 
    setIsEdit(false)
  }

  const handleDeleteCategory = (id: string) =>{
    const temp:Array<CategoryItem> = categories.filter((item) => item.id !== id)
    setCategories(temp)
    console.log(id)
  }

  const handleOnSubmit = (newCategory: CategoryItem) => {
    if(!isEdit) {
      //add New
      const temp:Array<CategoryItem> = [...categories, {...newCategory, id: creatId()}]
      setCategories(temp)
      setIsShowAddNew(false)
    }else{
      //Edit
      const temp:Array<CategoryItem> = categories.map((item) => {
        if(item.id === newCategory.id) return newCategory
        return item
      })
      setCategories(temp)
       
    } 
  }

  const handleOpenEditForm = (itemEdit: CategoryItem) =>{
    setIsEdit(true)
    setItemSetting(itemEdit)
  }
 
  return <div>
    <div>CATEGORIES</div>
    <div>
      <>
        <button onClick={()=>setIsShowAddNew(!isShowAddNew)}>{`${isShowAddNew ? "Close Add New" : "Add New"}`}</button>
        {
          isShowAddNew &&  <NewData onSubmit={handleAddCategory} isEdit={false} initData={initNewCategory}/>
        }
        {
          isEdit && <NewData onSubmit={handleEditCategory} isEdit={isEdit} initData={itemSetting}/>
        }
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
            <th></th>
         </tr>
        </thead>
        {
            categories?.length > 0 ?
            <tbody>
              {
                categories.map(
                  (item, index) => <RowTable key={item.id} data={item} onDelete={()=>handleDeleteCategory(item.id)} no={index++} onEdit={handleOpenEditForm}/>
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
