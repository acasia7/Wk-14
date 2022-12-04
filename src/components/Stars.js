//a one to five-star rating component that allows users to rate something 
//(movies in this case, but remember that components are reusable, so you could use it elsewhere!)
import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);

   return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return(
                    <label>
                        <input 
                            type='radio' 
                            name='rating' 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                            />
                            <FaStar className="star" size={100} color={ratingValue <= rating ? "#ffc107" : '#e4e5e9'}/>
                    </label>
                );
            })}
            <span className='mx-2 btn btn-danger' id='star'>{rating}</span>
        </div>
    );
};

export default StarRating;
