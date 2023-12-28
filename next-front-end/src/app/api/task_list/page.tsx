import Home from "@/app/page";
import TodoList from "@/screens/todo/todo-list/task_list";

export default function TaskList() {
    return (
      <main className="flex flex-col  justify-between ml-80 ">
      <h1 className="font-bold text-2xl mt-4 text-center">TO-DO LIST</h1>

      
      <div className="mt-2 " style={{ width: "800px" }}>
        <TodoList />
      </div>
    </main>
    );
  }