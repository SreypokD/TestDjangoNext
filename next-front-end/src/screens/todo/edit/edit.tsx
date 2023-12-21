"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTask() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleTaskNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTaskName(e.target.value);
  };

  const handleTaskStatusChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTaskStatus(e.target.value);
  };

  const handleDateChange = (date: React.SetStateAction<Date | null>) => {
    setSelectedDate(date);
  };

  const edit = () => {
    // Implement your edit logic here
    console.log("Edit function called");
  };

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
          {/* Your SVG path here */}
        </svg>
      </div>
      <input
        onClick={onClick}
        value={value}
        placeholder="Select date"
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block ps-10 p-3 gray:bg-gray-200 dark:border-gray-600   input input-bordered"
      />
    </div>
  );

  return (
    <div className="">
      <button
        className="btn bg-blue-700 hover:bg-blue-800 text-white "
        onClick={openModal}
      >
        Add task
      </button>
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box  p-6 bg-white rounded-lg shadow-lg">
            <form method="dialog" className="">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <div className="">
              <h3 className="font-bold text-2xl mb-4 text-center">
                Add task here
              </h3>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="task name"
                  value={taskName}
                  onChange={handleTaskNameChange}
                  className="input input-bordered w-full mb-4"
                />
                <div className="flex">
                  <div className="relative inline-block w-1/2 mb-4">
                    <select
                      value={taskStatus}
                      onChange={handleTaskStatusChange}
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
                        {/* Your SVG path here */}
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
              <button
                className="btn bg-blue-700 hover:bg-blue-800 text-white w-full mb-4"
                onClick={edit} // Use the edit function here
              >
                Save
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
