"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [totalUncomplete, setTotalUncomplete] = useState(0);
  const [totalInprogress, setTotalInprogress] = useState(0);
  const [totalComplete, setTotalComplete] = useState(0);
  const [totalTask, setTotalTask] = useState(0);

  useEffect(() => {
    // Fetch data from Django API
    const tasks = axios
      .get("http://127.0.0.1:8000/api/task-list/")
      .then((response) => {
        setTasks(response.data);
        getTotalStatus(response.data);
      });
  }, []);

  const renderTaskStatus = (task: any) => {
    // console.log(task);
    if (task.status === "uncomplete") {
      return (
        <span className="badge badge-error text-white mt-1 p-2">
          Uncomplete
        </span>
      );
    } else if (task.status === "inprogress") {
      return (
        <span className="badge badge-warning text-white mt-1 p-2">
          Inprogress
        </span>
      );
    } else if (task.status === "done") {
      return (
        <span className="badge badge-accent text-white mt-1 p-2">Complete</span>
      );
    } else {
      return (
        <span className="badge badge-outline mt-1 p-2">Unknown Status</span>
      );
    }
  };

//get each status function 
const getTotalStatus = (tasks:any) => {
  const uncompleteCount = tasks.filter((task :any) => task.status === 'uncomplete').length;
  const inprogressCount = tasks.filter((task :any) => task.status === 'inprogress').length;
  const completeCount = tasks.filter((task :any) => task.status === 'done').length;
  const totalTask = tasks.length;

  setTotalUncomplete(uncompleteCount);
  setTotalInprogress(inprogressCount);
  setTotalComplete(completeCount);
  setTotalComplete(completeCount);
  setTotalTask(totalTask);
};

  return (
    <>
      <div className="stats shadow m-5 bg-gray-200 ml-80">
        <div className="stat w-64 ">
          <div className="stat-figure text-primary ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </div>
          <div className="stat-title">Total Tasks</div>
          <div className="stat-value text-primary">{totalTask}</div>
        </div>

        <div className="stat w-64 ">
          <div className="stat-figure text-red-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <div className="stat-title">Todo Tasks</div>
          <div className="stat-value text-red-500">{totalUncomplete}</div>
        </div>

        <div className="stat w-64">
          <div className="stat-figure text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <div className="stat-title">Inprogress Tasks</div>
          <div className="stat-value text-yellow-500">{totalInprogress}</div>
        </div>

        <div className="stat w-64">
          <div className="stat-figure text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
              />
            </svg>
          </div>
          <div className="stat-title">Done Tasks</div>
          <div className="stat-value text-green-500">{totalComplete}</div>
        </div>
      </div>
      <div className="flex ml-80 flex-wrap">
        {tasks.map((task: any, index: number) => (
          <div className="card w-80  p-6 bg-gray-100 rounded-lg shadow-lg mt-10 m-3">
            <figure>
              <img
                src="https://cdn-icons-png.flaticon.com/512/762/762686.png"
                width="100"
                alt="Task"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Task
                <div>{renderTaskStatus(task)}</div>
              </h2>
              <div className="flex">
                <p>Title:</p>
                <p>{task.title}</p>
              </div>
              <div className="flex ">
                <p>Date:</p>
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
          </div>
        ))}
      </div>
      {/* <table className="table stats shadow m-5  w-full">
          <thead>
            <tr className="bg-gray-300 text-base">

              <th>Title</th>
             
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            {tasks.map((task: any, index: number) => (
              <tr className="hover:bg-gray-200" key={index}>
                
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

               
              </tr>
            ))}
          </tbody>
        </table> */}
    </>
  );
}
