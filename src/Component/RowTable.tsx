import React from "react";
import { RowTableProps } from "./type";

export const RowTable: React.FC<RowTableProps> = ({data: {id, name, isUsed, date}, onDelete}) => {
  return <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{isUsed === 1 ? "Used" : "Not Used"}</td>
    <td>{date}</td>
    <td onClick={onDelete}>x</td>
  </tr>;
};

