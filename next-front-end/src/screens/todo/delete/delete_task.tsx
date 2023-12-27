"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { message } from "antd";

export default function DeleteTask() {
  const router = useRouter();
  const [taskId, setTaskId] = useState<string | null>(null);
  // Extract taskId from the URL (research)
  useEffect(() => {
    const pathnameParts = window.location.pathname.split("/");
    const extractedTaskId = pathnameParts[pathnameParts.length - 1];
    setTaskId(extractedTaskId);

    // Fetch task details based on the taskId
    fetchTaskDetails(extractedTaskId);
  }, []);
  const fetchTaskDetails = async (taskId: string) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/task-detail/${taskId}`
      );
    } catch (err) {
      console.error("Error fetching task details", err);
    }
  };
  const handleDeleteTask = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/delete-task/${taskId}`
      );
      message.success(`Task id ${taskId} have been delete`);
      router.push("/api/task_list");
    } catch (err) {
      message.error("Error deleting task");
      console.log("Delete task error", err);
    }
  };
  return (
    <div className="modal-box  p-6 bg-gray-100 rounded-lg shadow-lg mt-20">
      <form method="dialog" className="">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
             onClick={() => router.push('/api/task_list')}
        >
          ✕
        </button>
      </form>
      <div className="p-5">
        <h3 className="font-bold text-2xl mb-4 text-center w-96">
          Are you sure to delete?
        </h3>

        <button
          className="btn bg-red-700 hover:bg-red-800 text-white ml-20 w-48 "
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
