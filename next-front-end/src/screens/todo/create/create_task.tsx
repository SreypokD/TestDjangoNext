"use client";
import axios from "axios";
import { isBefore, parseISO } from "date-fns";
import { useState } from "react";
import { message } from "antd";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const currentDate = new Date();

      if (isBefore(date, currentDate)) {
        // If selectedDate is before currentDate
        // Show an error message
        message.error("Please select a date in the future");
      } else {
        setSelectedDate(date);
      }
    }
  };

  const handleCreateTask = async () => {
    try {
      const respone = await axios.post(
        "http://127.0.0.1:8000/api/create-task/",
        {
          taskName: taskName,
          taskStatus: taskStatus,
          selectedDate: selectedDate,
        }
      );
      console.log(selectedDate);
    } catch (err) {
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
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
            <div className="flex">
              <div className="relative inline-block w-1/2 mb-4">
                <select
                  value={taskStatus}
                  onChange={(e) => setTaskStatus(e.target.value)}
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
                className="input input-bordered ml-2 w-80 mb-4"
                id="date"
                name="date"
                // value={
                //   selectedDate 
                // } // Convert Date to string
                // onChange={handleDateChange}
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

// "use client";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function AddTask() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [taskName, setTaskName] = useState("");
//   const [taskStatus, setTaskStatus] = useState("");
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   const openModal = () => {
//     setModalOpen(true);

//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleTaskNameChange = (e: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setTaskName(e.target.value);
//   };

//   const handleTaskStatusChange = (e: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setTaskStatus(e.target.value);
//   };

//   const handleDateChange = (date: React.SetStateAction<Date | null>) => {
//     setSelectedDate(date);
//   };

//   const CustomDatePickerInput = ({ value, onClick }: any) => (
//     <div className="relative max-w-sm">
//       <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
//           />
//         </svg>
//       </div>
//       <input
//         onClick={onClick}
//         value={value}
//         placeholder="Select date"
//         // readOnly
//         className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block ps-10 p-3 gray:bg-gray-200 dark:border-gray-600   input input-bordered"
//       />
//     </div>
//   );

//   return (
//     <div className="">
//       <button
//         className="btn bg-blue-700 hover:bg-blue-800 text-white "
//         onClick={openModal}
//       >
//         Add task
//       </button>
//       {isModalOpen && (
//         <dialog id="my_modal_3" className="modal" open>
//           <div className="modal-box  p-6 bg-white rounded-lg shadow-lg">
//             <form method="dialog" className="">
//               <button
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                 onClick={closeModal}
//               >
//                 ✕
//               </button>
//             </form>
//             <div className="">
//               <h3 className="font-bold text-2xl mb-4 text-center">
//                 Add task here
//               </h3>
//               <div className="mt-5">
//                 <input
//                   type="text"
//                   placeholder="task name"
//                   value={taskName}
//                   onChange={handleTaskNameChange}
//                   className="input input-bordered w-full mb-4"
//                 />
//                 <div className="flex">
//                   <div className="relative inline-block w-1/2 mb-4">
//                     <select
//                       value={taskStatus}
//                       onChange={handleTaskStatusChange}
//                       className="input input-bordered w-full"
//                     >
//                       <option disabled value="">
//                         task status
//                       </option>
//                       <option value="todo">Todo</option>
//                       <option value="inprogress">In Progress</option>
//                       <option value="done">Done</option>
//                     </select>

//                     <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
//                       <svg
//                         className="w-4 h-4 fill-current text-gray-500"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M10 12l-6-6-1.414 1.414L10 14.828l7.414-7.414L16 6"></path>
//                       </svg>
//                     </div>
//                   </div>

//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={handleDateChange}
//                     customInput={<CustomDatePickerInput />}
//                   />
//                 </div>
//               </div>
//               <button className="btn bg-blue-700 hover:bg-blue-800 text-white w-full mb-4">
//                 Save
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </div>
//   );
// }
