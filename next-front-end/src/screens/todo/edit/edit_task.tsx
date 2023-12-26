"use client";
import { message } from "antd";
import axios from "axios";
import { isBefore, parseISO, format } from "date-fns";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function UpdateTask() {
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
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    const parsedDate = dateValue ? parseISO(dateValue) : null;

    if (parsedDate && isBefore(parsedDate, new Date())) {
      // If selectedDate is before currentDate
      // Show an error message
      message.error("Please select a date in the future");
    } else {
      // Set the formatted date string
      const newFormattedDate = parsedDate ? format(parsedDate, "yyyy-MM-dd") : "";
      setFormattedDate(newFormattedDate);

      // Set the selected date
      setSelectedDate(parsedDate);
    }
  };

  const handleEditTask = async () => {
    try {
      // Axios request to update the task
      const response = await axios.put(`http://127.0.0.1:8000/api/update-task/${taskId}/`, {
        title: taskNameEdit,
        status: taskStatusEdit,
        date: formattedDate,
      });

      // Handle the response as needed
      console.log(response.data);

      // Display a success message
      message.success("Task updated!");
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
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="">
          <h3 className="font-bold text-2xl mb-4 text-center">Edit task here</h3>
          <div className="mt-5">
            <input
              type="text"
              placeholder="task name"
              value={taskNameEdit}
              onChange={(e) => setTaskNameEdit(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <div className="flex">
              <div className="relative inline-block w-1/2 mb-4">
                <select
                  value={taskStatusEdit}
                  onChange={(e) => setTaskStatusEdit(e.target.value)}
                  className="input input-bordered w-full"
                >
                  <option disabled value="">
                    task status
                  </option>
                  <option value="todo">Todo</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                  <svg
                    className="w-4 h-4 fill-current text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-6-6-1.414 1.414L10 14.828l7.414-7.414L16 6"></path>
                  </svg>
                </div>
              </div>

              <input
                type="date"
                id="date"
                name="date"
                className="input input-bordered ml-2 w-80 mb-4"
                value={formattedDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <button
            className="btn bg-blue-700 hover:bg-blue-800 text-white w-full mb-4"
            onClick={handleEditTask}
          >
            Save Edit
          </button>
        </div>
      </div>
    </>
  );
}
