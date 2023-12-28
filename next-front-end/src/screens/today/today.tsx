export default function TodayView() {
  return (
    <div className="card w-80  p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
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
          <div className="badge badge-secondary">Today</div>
        </h2>
        <div className="flex">
          <p>Title:</p>
          <p>task title</p>
         
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
          <p className="">2023/12/20</p>
        </div>
      </div>
    </div>
  );
}
