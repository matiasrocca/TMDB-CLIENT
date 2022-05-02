import imagen from "../utils/default_poster.jpg"

const Card = ({ data }) => {

    return (
    <div className="card" style={{backgroundColor: "transparent"}}>
        <div className="card-image">
          <figure className="image">
            {
             (!data.poster_path)?
             (<img
              src={imagen}
              alt="Placeholder"
            /> ):
            (
              <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt="Placeholder"
              />
            )
            }
            
          </figure>
        <div className="titulos">
          <h1>{data.original_title || data.name}</h1>
        </div>
      </div>
    </div>

    );
  };
  
  export default Card;