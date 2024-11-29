import placeholderImg from "../../assets/img/placeholder.png";

export default function Card({ title, img, description }) {
  const imagePath = img || placeholderImg;

  return (
    <div className="card">
      <div className="card-header">
        <img src={imagePath} alt="" className="card-img" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn warning">leggi di più</button>
      </div>
    </div>
  );
}
