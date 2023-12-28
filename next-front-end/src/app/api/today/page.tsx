import TodayView from "@/screens/today/today";
import TodoList from "@/screens/todo/todo-list/task_list";

export default function Today() {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-xl text-center">Task's Today</h1>
      <TodayView/>
    </div>
  );
}
