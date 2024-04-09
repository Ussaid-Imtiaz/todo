import { TodoType } from "../../types";
import { CiSquareCheck } from "react-icons/ci";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function Task({ task }: { task: TodoType }) {
  return (
    <tr className="flex justify-between items-center border-b border-gray-300 px-2 py-2">
      <td>{task.content}</td>
      <td className="flex gap-x-2">
        <CiSquareCheck
          size={28}
          className={`${task.isCompleted ? "text-green-500" : "text-gray-300"}`}
        />
        <FiEdit size={24} className="" />
        <FiTrash size={24} className="" />
      </td>
    </tr>
  );
}
