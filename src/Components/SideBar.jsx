export default function SideBar(props) {
  const { handleToggleModel, data } = props;
  return (
    <div className="sidebar">
      <div className="bg-overlay" onClick={handleToggleModel}></div>
      <div className="sidebar-contents">
        <h2>{data.title}</h2>
        <div className="description-container">
          <p className="description-title">{data.date}</p>
          <p>{data.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
