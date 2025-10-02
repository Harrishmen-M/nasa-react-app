export default function Main(prop) {
  const { data } = prop;
  return (
    <div className="img-container">
      <img src={data.hdurl} alt="mars-demo-picture" className="bg-image" />
    </div>
  );
}
