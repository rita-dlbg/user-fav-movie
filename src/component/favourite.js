import React from 'react';

const MovieFavorite = ({item}) => {
   
  return (
    <div className="listmovie" key={item?.id}>
    <div className="imagenya">
      <img className="imgstyle" src={item?.image} alt={item?.name} />
    </div>
    <div className="descnya">
      <h3>Judul : {item?.name}</h3>
      <p>
        <br />
        <span>Author: {item?.author}</span>
        <button onClick={() => this.props.delete(item?.id)}>
          Delete from Favorite
        </button>
      </p>
    </div>
  </div>
    );
  }

export default MovieFavorite;
