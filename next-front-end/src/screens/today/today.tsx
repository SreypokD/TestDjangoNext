export default function TodayView() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://cdn-icons-png.flaticon.com/512/762/762686.png"
          width='200'
          alt="Task"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Task!
          <div className="badge badge-secondary">Today</div>
        </h2>
        <p>If a dog chews Task whose Task does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
