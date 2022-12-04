//a component that represents movie data (i.e. image, synopsis, rating, etc…)
import React, {useState} from 'react';
import Stars from './Stars';


function Movie({Title, year, imdbID, Type, image,}) {

    const [submit, setSubmit]= useState([])

    const addReview = () => {
        console.log(submit);
        setSubmit([...submit, {
                                userName: `RandomUser${Math.floor(Math.random() * 900)}`,
                                text: `${document.getElementById('new-review').value}`,
                                rating: `${document.getElementById('star').innerHTML} star`,
                                id: Math.floor(Math.random() * 1000)
                            }
      ])

    }
    

  return (

         <div className='card bg-dark text-light'>
            <div className='card-header row mx-0'>
                <h4>{Title}</h4>
            </div>
            <div className='row card-body'>
                <div className='col-sm'>
                    <div className='row'>
                        <div className='col'>
                            <img className='w-100' src={image}></img>
                        </div>
                        <div className='col'>                      
                            <span>Released: {year}</span><br></br>
                            <span>imdbID: {imdbID}</span><br></br>
                            <span>Type: {Type}</span>
                        </div>
                    </div>
   
                </div>
                <div className='col-md'>
                        
                        {submit && submit.map(submit => {
                    return(
                        <ul className='list-group border border-danger border-2 mb-1'>
                            {console.log(submit)}
                            <li className='list-group-item text-light bg-dark'><strong>Username:</strong> {submit.userName}</li>
                            <li className='list-group-item text-light bg-dark'><strong>Review:</strong> {submit.text}</li>
                            <li className='list-group-item text-light bg-dark'><strong>Rating:</strong> {submit.rating}</li><br></br>
                        </ul>
                        )
                        }
                    )
                }
                </div>
                <div className='col-sm'>
                    <a>Leave a Review</a>
                    <textarea id='new-review' className='form-control mb-2' type='text' rows="4" placeholder='Write a Review Here!'></textarea>
                    <Stars /> 
                    <button onClick={addReview} className='btn btn-light mt-2' type='submit'>Submit</button>
                </div>
            </div>
         </div>
  )
}

export default Movie

//export default class Movie extends React.Component {
  //  render() {
    //    return (
     //       <div className="movie">
       //         <div>
           //         <h3>Movie Title</h3>
         //           Star Wars: Episode IV - A New Hope, 1977
              //  </div>
             //   <div>
              //      <h3>Image</h3>
              //      <img src='https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg' alt="Star Wars Movie Poster"></img>
              //  </div>
              //  <div>
               //     <h3>Synopsis</h3>
                    
              //  </div>
               // <div>
                //    <h3>Rating</h3>
                //    <Stars />
              //  </div>
           // </div>
      //  );
  //  }
//}

   // "Title": "Star Wars: Episode IV - A New Hope",
    //"Year": "1977",
//   "imdbID": "tt0076759",
  //  "Type": "movie",
    //"Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
 // },
  //{
    ///"Title": "Star Wars: Episode V - The Empire Strikes Back",
 //   "Year": "1980",
  //  "imdbID": "tt0080684",
  //  "Type": "movie",
  //  "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
 // },
  //{
  //  "Title": "Star Wars: Episode VI - Return of the Jedi",
  //  "Year": "1983",
  //  "imdbID": "tt0086190",
  //  "Type": "movie",
 //   "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" 
 // }