export type CategoryItem = {
  id: string,
  name: string,
  isUsed: Number,
  date?: string
}

export type RowTableProps = {
  data: CategoryItem,
  onDelete: () => void,
  no?: number,
  onEdit: (itemEdit: CategoryItem) => void
}

export type TableDataProps = {
  listCategories: CategoryItem[]
}
export type NewDataProps = {
  initData: CategoryItem,
  isEdit: Boolean,
  onSubmit: (newCategory: CategoryItem) => void
}
