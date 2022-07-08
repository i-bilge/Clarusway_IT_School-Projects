const Card = ({ city }) => {
    return (
      <div className="cards">
        <div className="title">
          <h1>{city.title}</h1>
        </div>
        <img src={city.image} alt="City view" />
        <div className="card-over">
          <p>{city.desc}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  