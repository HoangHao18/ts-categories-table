export type CategoryItem = {
  id?: string,
  name: string,
  isUsed: Number,
  date: string,
  no?: number
}

export type RowTableProps = {
  data: CategoryItem,
  onDelete: () => void,
  onEdit: (itemEdit: CategoryItem) => void
}

export type TableDataProps = {
  listCategories: CategoryItem[]
}
export type FormDataProps = {
  initData: CategoryItem,
  isEdit: Boolean,
  onSubmit: (newCategory: CategoryItem) => void
}
