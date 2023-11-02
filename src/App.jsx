import { useEffect, useState } from "react";
import Auth from "./components/auth/auth";
import {db} from "./firebase/firebase";
import { getDocs , collection , onSnapshot} from "firebase/firestore";
import { query } from "express";

function App() {
  const [movies , setMovies] = useState([]);
  const movieCollection = collection(db , 'movies')
  useEffect(() => {
    const getMovies = async () => {
      try{
        const data = await getDocs(movieCollection);
        const filteredData = data.docs.map((doc) =>({
          ...doc.data(),
          id : doc.id
        }))
        console.log(filteredData);
        setMovies(filteredData);
        // const moviesQuery = query(movieCollection);
        // moviesQuery.onSnapshot((snapshot) => {
        //   const getMoives = snapshot.docs;
        //   console.log(getMoives);
        // })
      }catch(error){
        console.log("Internal server error" , error);
      }
    }
    getMovies();
  },[])

  return (
    <div className="App">
      <h1>Hello , This is React x Firebase</h1>
      <Auth/>
      {movies && movies.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
