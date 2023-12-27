"use client";
import { message } from "antd";
import axios from "axios";
import { isBefore, parseISO, format } from "date-fns";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

export default function UpdateTask() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [taskNameEdit, setTaskNameEdit] = useState("");
  const [taskStatusEdit, setTaskStatusEdit] = useState("");
  const [formattedDate, setFormattedDate] = useState<string>("");
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
      const task = response.data;
      // console.log(task);

      // Update the state variables with the task details
      setTaskNameEdit(task.title);
      setTaskStatusEdit(task.status);
      setFormattedDate(task.date);
      setSelectedDate(parseISO(task.date));
    } catch (err) {
      console.error("Error fetching task details", err);
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    const parsedDate = dateValue ? parseISO(dateValue) : null;

    if (parsedDate && isBefore(parsedDate, new Date())) {
      // If selectedDate is before currentDate
      // Show an error message
      message.error("Please select a date in the future");
    } else {
      // Set the formatted date string
      const newFormattedDate = parsedDate
        ? format(parsedDate, "yyyy-MM-dd")
        : "";
      setFormattedDate(newFormattedDate);

      // Set the selected date
      setSelectedDate(parsedDate);
    }
  };

  const handleEditTask = async () => {
    try {
      // Axios request to update the task
      const response = await axios.put(
        `http://127.0.0.1:8000/api/update-task/${taskId}/`,
        {
          title: taskNameEdit,
          status: taskStatusEdit,
          date: formattedDate,
        }
      );

      // Display a success message
      message.success("Task updated!");
      router.push("/api/task_list");
    } catch (err) {
      message.error("Error updating task");
      console.log("Error updating task", err);
    }
  };

  return (
    <>
      <div
        className="modal-box  p-6 bg-gray-100 rounded-lg shadow-lg mt-20"
        style={{ width: "700px" }}
      >
        <form method="dialog" className="">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
           onClick={() => router.push('/api/task_list')}
          >
            ✕
          </button>
        </form>
        <div className="">
          <h3 className="font-bold text-2xl mb-4 text-center">
            Edit task here
          </h3>
          <div className="mt-5">
            <input
              type="text"
              placeholder="task name"
              value={taskNameEdit}
              onChange={(e) => setTaskNameEdit(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <div className="flex">
              <div className="relative inline-block w-full mb-4">
                <select
                  value={taskStatusEdit}
                  onChange={(e) => setTaskStatusEdit(e.target.value)}
                  className="input input-bordered w-full"
                >
                  <option disabled value="">
                    task status
                  </option>
                  <option value="uncomplete">Un complete</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2  pointer-events-none ">
                  <svg
                    className="w-4 h-4 fill-current text-gray-500 m-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-6-6-1.414 1.414L10 14.828l7.414-7.414L16 6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <input
              type="date"
              value={formattedDate}
              onChange={handleDateChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleEditTask}
              className="btn bg-blue-700 hover:bg-blue-800 text-white w-full mb-4"
            >
              Save Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
