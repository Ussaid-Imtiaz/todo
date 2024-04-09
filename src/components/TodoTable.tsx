import { table } from "console";
import { Content } from "next/font/google";
import { TodoType } from "../../types";
import Task from "./Task";

function TodoTable() {
  const todo_list: TodoType[] = [
    { id: 1, content: "task 1", isCompleted: false },
    { id: 2, content: "task 2", isCompleted: false },
    { id: 3, content: "task 3", isCompleted: false },
  ];

  return (
    <table className="w-full">
      <thead>
        <tr className="flex justify-between items-center px-2 py-1 bg-gray-100 shadow-md rounded-md">
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {todo_list.map((task : TodoType) => (
          <Task key={task.id} task ={task} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
