import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MovieFavorite from '../../component/favourite';


const Movies = ({ addToFavorite, deleteToFavorite, props }) => {

  
        const [state, setState] = useState({
         movies : [
          {
            id: 1,
            name: "Darbar",
            image: "/images/movie1.jpeg",
            description: "Super Hit Movie",
          },
          {
            id: 2,
            name: "Iron Man",
            image: "/images/movie2.jpeg",
            description: "Super Hit Movie",
          },
          {
            id: 3,
            name: "Talvar",
            image: "/images/movie3.jpeg",
            description: "Super Hit Movie",
          },
          {
            id: 4,
            name: "Dangal",
            image: "/images/movie4.jpeg",
            description: "Super Hit Movie",
          }
        ],
        moviefav: []

    });

      addToFavorite = id => {
        const data = state.movies.find(item => item.id === id);
        setState({
            moviefav: [...state.moviefav, data]
        });
      };
    
      deleteToFavorite = id => {
        const hapus = state.moviefav.filter(item => item.id !== id);
        setState({ moviefav: hapus });
      };


        return (
          <div className="container">
             <nav className="pointer nav-link"><Link to="/sign-in">Log Out</Link></nav> 
            <h1 className="tc">Add Favorite Movies</h1>
            <div className="wrap">
              <div className="container-left">
              {state.movies?.map (item => (
                   <div className="listmovie" key={item.id} movies={state.movies} add={addToFavorite}>
                   <div className="imagenya">
                     <img className="imgstyle" src={item.image} alt={item.name} />
                   </div>
                   <div className="descnya">
                     <h3>Name : {item.name}</h3>
                     <p>
                       <span className="desc">Description : {item.description}</span>
                     </p>
                     <button onClick={() => this.props.add(item.id)}>Add to Fav</button>
                   </div>
                 </div>
                ))}  
                <hr />
               
              </div>

              <h2 className="tc">Favorite Movies</h2>
              <div className="container-right">
               
                     <MovieFavorite
                     moviefav={state.moviefav}
                     delete={deleteToFavorite}
                   />
              </div>
             
            </div>
          </div>
        );

    };

export default Movies