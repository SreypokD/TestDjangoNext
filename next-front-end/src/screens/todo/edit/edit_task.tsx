"use client"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function UpdateTask() {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: React.SetStateAction<Date | null>) => {
    setSelectedDate(date);
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
    <>
      <div className="modal-box  p-6 bg-white rounded-lg shadow-lg">
        <form method="dialog" className="">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
           
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
    </>
  );
}
