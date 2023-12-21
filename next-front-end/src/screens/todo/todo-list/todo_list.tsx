"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TodoList() {
  const [isModalEditOpen, setModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: React.SetStateAction<Date | null>) => {
    setSelectedDate(date);
  };

  const openEditModal = () => {
    setModalEditOpen(true);
  };
  const closeEditModal =() =>{
    setModalEditOpen(false);
  }


  const openDeleteModal = () => {
    setModalDeleteOpen(true);
  };
  const closeDeleteModal =() =>{
    setModalDeleteOpen(false);
  }

  const CustomDatePickerInput = ({ value, onClick }: any) => (
    <div className="relative max-w-sm">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
      </div>
      <input
        onClick={onClick}
        value={value}
        placeholder="Select date"
        // readOnly
        className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block ps-10 p-3 gray:bg-gray-200 dark:border-gray-600   input input-bordered"
      />
    </div>
  );

  return (
    <div className=" ">
      <table className="table">
        <thead>
          <tr className="bg-gray-300">
            <th>№</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-200">
            <td>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </td>
            <td>
              <div className="flex flex-col">
                <strong className="title">
                  Cyldj a aaaaaaaaaa aaaaaa aaasfgsdg sdsal sdafjklsa
                </strong>
                <div className="flex mt-2 align-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <p className="mt-1">10/10/2023</p>
                </div>
              </div>
            </td>
            <td className="badge badge-accent badge-outline mt-6">done</td>
            <td>
              <div className="flex algin-center ">
                <div className="edit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-700 cursor-pointer"
                    onClick={openEditModal}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div className="delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500 ml-2 cursor-pointer"
                    onClick={openDeleteModal}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>

          {/* edit part================================ */}
          {isModalEditOpen && (
            <dialog id="my_modal_3" className="modal" open>
              <div className="modal-box  p-6 bg-white rounded-lg shadow-lg">
                <form method="dialog" className="">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={closeEditModal}
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
                      // value={}
                      // onChange={}
                      className="input input-bordered w-full mb-4"
                    />
                    <div className="flex">
                      <div className="relative inline-block w-1/2 mb-4">
                        <select
                          // value={}
                          // onChange={}
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

                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        customInput={<CustomDatePickerInput />}
                      />
                    </div>
                  </div>
                  <button className="btn bg-blue-700 hover:bg-blue-800 text-white w-full mb-4">
                    Save Edit
                  </button>
                </div>
              </div>
            </dialog>
          )}


          {/* delete part================================ */}
          {isModalDeleteOpen && (
            <dialog id="my_modal_3" className="modal" open>
              <div className="modal-box  p-6 bg-white rounded-lg shadow-lg">
                <form method="dialog" className="">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={closeDeleteModal}
                  >
                    ✕
                  </button>
                </form>
                <div className="">
                  <h3 className="font-bold text-2xl mb-4 text-center">
                    Are you sure to delete?
                  </h3>

                  <button className="btn bg-red-700 hover:bg-red-800 text-white ml-36 w-48 mb-4">
                    Delete
                  </button>
                </div>
              </div>
            </dialog>
          )}
        </tbody>
      </table>
    </div>
  );
}
