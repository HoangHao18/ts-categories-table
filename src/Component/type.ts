export type CategoryItem = {
  id: string,
  name: string,
  isUsed: Number,
  date?: string
}

export type RowTableProps = {
  data: CategoryItem,
  onDelete: () => void
}

export type TableDataProps = {
  listCategories: CategoryItem[]
}
