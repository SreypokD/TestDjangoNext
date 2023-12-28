// import NavLinks from "@/components/menu/navlink"
import Todolist from "@/screens/todo/todo-list/task_list";
import AddTask from "@/screens/todo/create/create_task";
import MenuBar from "@/components/menu/manu";

import DashboardPage from "@/screens/dashboard/dashboard";
export default function Home() {
  return (
    <main className="flex flex-col  justify-between ">
      <div className="mt-2 ">
        <DashboardPage/>
      </div>
    </main>
  );
}
