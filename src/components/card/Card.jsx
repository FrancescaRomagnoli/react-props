import placeholderImg from "../../assets/img/placeholder.png";

export default function Card() {
  return (
    <div className="card-row">
      <div className="card">
        <div className="card-header">
          <img src={placeholderImg} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <h3>Titolo del post</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            aliquam deserunt nihil quod. Eaque vel suscipit aut facere totam
            nemo voluptate sint numquam laudantium. Facere perferendis incidunt
            quam molestias!
          </p>
          <button className="btn warning">leggi di più</button>
        </div>
      </div>
    </div>
  );
}
