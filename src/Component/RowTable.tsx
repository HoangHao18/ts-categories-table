import React from "react";
import { RowTableProps } from "./type";

export const RowTable: React.FC<RowTableProps> = ({data: Category, onDelete, no, onEdit}) => {
  return <tr>
    <td>{no}</td>
    <td>{Category.name}</td>
    <td>{Category.isUsed === 1 ? "Used" : "Not Used"}</td>
    <td>{Category.date}</td>
    <td><button onClick={()=>onEdit(Category)}>EDIT</button></td>
    <td onClick={onDelete}>x</td>
  </tr>;
};

