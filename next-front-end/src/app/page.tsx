// import NavLinks from "@/components/menu/navlink"
import Todolist from "@/screens/todo/todo-list/todo_list";
import AddTask from "@/screens/todo/create/add_task";
import MenuBar from "@/components/menu/manu";
export default function Home() {
  return (
    <main className="flex flex-col  justify-between ">
      <h1 className="font-bold text-2xl mt-4 text-center">TO-DO LIST</h1>

      <AddTask />
      <div className="mt-2 " style={{'width': '800px'}}>
        <Todolist />
      </div>
    </main>
  );
}
