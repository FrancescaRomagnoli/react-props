// import placeholderImg from "../../assets/img/placeholder.png";
const placeholderImg = "https://picsum.photos/600/400";

export default function Card({ title, img, description }) {
  const imagePath = img || placeholderImg;

  return (
    <div className="card">
      <div className="card-header">
        <img src={imagePath} alt="" className="card-img" />
      </div>
      <div className="card-body">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        <button className="btn warning">leggi di più</button>
      </div>
    </div>
  );
}
