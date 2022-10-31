import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {

        const [state, setState] = useState([{
          
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

        ]);

    const [favorite, setFavourite ] = useState([]);

      const addToFavorite = (id) => {
        let data = [...favorite]
        if (data.find(e => e.id === id)) {
          alert("Movie is already in favorites");
        }else {
        data.push(state.find(item => item.id === id));
        setFavourite(data)
        }
      }
  
       const deleteToFavorite = (id) => {
        let data = [...favorite]
        const remfav = data.findIndex((item) => item.id === id);
        data.splice(remfav, 1);
        setFavourite(data)
      };
      // console.log(favorite);

        return (
          <div className="container">
             <nav className="pointer nav-link"><Link to="/sign-in">Log Out</Link></nav> 
            <h1 className="tc">Add Favorite Movies</h1>
            <div className="wrap">
              <div className="container-left">
              {state?.map (item => (
                   <div className="listmovie" key={item.id} movies={state.movies} add={addToFavorite}>
                   <div className="imagenya">
                     <img className="imgstyle" src={item.image} alt={item.name} />
                   </div>
                   <div className="descnya">
                     <h3>Name : {item.name}</h3>
                     <p>
                       <span className="desc">Description : {item.description}</span>
                     </p>
                     <button onClick={() => addToFavorite(item.id)}>Add to Fav</button>
                   </div>
                 </div>
                ))}  
                <hr />
               
              </div>

              <h2 className="tc">Favorite Movies</h2>
              <div className="container-right">
          
              <div className="container-left">
              {favorite?.map (item => (
                   <div className="listmovie" key={item.id} movies={state.movies} add={deleteToFavorite}>
                   <div className="imagenya">
                     <img className="imgstyle" src={item.image} alt={item.name} />
                   </div>
                   <div className="descnya">
                     <h3>Name : {item.name}</h3>
                     <p>
                       <span className="desc">Description : {item.description}</span>
                     </p>
                     <button onClick={() => deleteToFavorite(item.id)}>Delete</button>
                   </div>
                 </div>
                ))}  
               
              </div>
              </div>
             
            </div>
          </div>
        );

    };

export default Movies