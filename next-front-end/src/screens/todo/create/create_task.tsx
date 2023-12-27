"use client";
import React from "react";
import axios from "axios";
import { isBefore, parseISO, format } from "date-fns";
import { useState } from "react";
import { message } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

export default function CreateTask() {
  const router = useRouter();


  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
  const handleCreateTask = async () => {
    if (!taskName || !taskStatus || !formattedDate) {
      message.error("Please provide all the required information.");
      return;
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create-task/",
        {
          title: taskName,
          status: taskStatus,
          date: formattedDate,
        }
      );
      message.success("Task created!");

      router.push("/api/task_list");
    } catch (err) {
      message.error("Can not create task!");
      console.log("Error create task", err);
    }
  };

  return (
    <>
      <div
        className="modal-box  p-6 bg-gray-100 rounded-lg shadow-lg mt-20"
        style={{ width: "700px" }}
      >
        <form method="dialog" className="">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => router.push('/api/task_list')}>
            ✕
          </button>
        </form>
        <div className="">
          <h3 className="font-bold text-2xl mb-4 text-center">
            Create task here
          </h3>
          <div className="mt-5">
            <input
              type="text"
              placeholder="task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <div className="">
              <div className="relative inline-block w-full mb-4">
                <select
                  value={taskStatus}
                  onChange={(e) => setTaskStatus(e.target.value)}
                  className="input input-bordered w-full"
                >
                  <option disabled value="">
                    task status
                  </option>
                  <option value="uncomplete">Un Complete</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                  <svg
                    className="w-4 h-4 fill-current text-gray-500 m-3"
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
                className="input input-bordered  w-full mb-4"
                value={formattedDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <button
            className="btn bg-blue-700 hover:bg-blue-800 text-white w-full mb-4"
            onClick={handleCreateTask}
          >
            Save task
          </button>
        </div>
      </div>
    </>
  );
}
