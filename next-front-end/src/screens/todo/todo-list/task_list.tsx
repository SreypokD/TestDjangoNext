"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { message } from "antd";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  //get all tasks
  useEffect(() => {
    // Fetch data from Django API
    const tasks = axios
      .get("http://127.0.0.1:8000/api/task-list/")
      .then((response) => {
        setTasks(response.data);
        // console.log(response.data);
      });
  }, []);

  const handleEditClick = (taskId: string) => {
    // console.log("Clicked edit ID:", taskId);
  };

  const handleDeleteClick = (taskId: string) => {
    // console.log("Clicked delete ID", taskId);
  };

  const renderTaskStatus = (task: any) => {
    // console.log(task);
    if (task.status === "uncomplete") {
      return (
        <span className="badge badge-error badge-outline mt-1 p-2">
          Uncomplete
        </span>
      );
    } else if (task.status === "inprogress") {
      return (
        <span className="badge badge-warning badge-outline mt-1 p-2">
          Inprogress
        </span>
      );
    } else if (task.status === "done") {
      return (
        <span className="badge badge-accent badge-outline mt-1 p-2">
          Complete
        </span>
      );
    } else {
      return (
        <span className="badge badge-outline mt-1 p-2">Unknown Status</span>
      );
    }
  };

  const handleCompleteButtonClick = async (task: any) => {
    const taskId = task;
    // console.log(task);

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/complete-task/${taskId}/`
      );
      // Reload the page after successful completion
      setTimeout(() => {
        window.location.reload();
      }, 500);
      setIsCompleted(!isCompleted);
    } catch (err) {
      message.error("You're not complete");
    }
    message.success("Todo marked as completed");
  };

  // Search task
  const filteredTasks = tasks.filter((task: any) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className=" ">
        <div className="mb-4 flex items-center justify-end">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search task"
              className="input input-bordered w-24 md:w-auto pl-10 pr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="bg-gray-300 text-base">
            <th>№</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task: any, index: number) => (
            <tr className="hover:bg-gray-200" key={index}>
              <td>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox w-5 h-5"
                    onChange={() => handleCompleteButtonClick(task.id)}
                    checked={task.status === "done"}
                  />
                </label>
              </td>
              <td>
                <div className="flex flex-col">
                  <strong
                    className="title "
                    style={{
                      textDecoration:
                        task.status === "done" ? "line-through" : "none",
                      color: task.status === "done" ? "red" : "inherit",
                    }}
                  >
                    {task.title}
                  </strong>
                  <div className="flex mt-2 align-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <p className="">{task.date}</p>
                  </div>
                </div>
              </td>
              <td>{renderTaskStatus(task)}</td>

              <td>
                <div className="flex algin-center ">
                  <div className="edit">
                    <Link href={`/api/update_task/${task.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-700 cursor-pointer"
                        onClick={() => handleEditClick(task.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="delete">
                    <Link href={`/api/delete_task/${task.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500 ml-2 cursor-pointer"
                        onClick={() => handleDeleteClick(task.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
