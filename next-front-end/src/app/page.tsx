import Navigation from "../components/navigation/navbar";
// import NavLinks from "@/components/menu/navlink"
import Todolist from "@/screens/todo/todo-list/todo_list";
import AddTask from "@/screens/todo/create/add_task";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navigation />
      <h1 className="font-bold text-2xl mt-4">TO-DO LIST</h1>
          <AddTask />
      <div className="w-full flex flex-col items-center">
        <div className="flex align-end  mr-2 m-2">
        </div>
        <div className="flex ">
          <Todolist />
        </div>
      </div>
        
    </main>
  );
}
