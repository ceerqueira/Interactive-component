import { useState } from 'react';
import './App.css';

import Rating from './components/rating';
import TrankYou from './components/thankyou'


function App() {
  const [showThankYouPage,setShowThankYouPage] = useState(false);
  const [rating, setRating] =useState(null);
  return (
    <div>
      {showThankYouPage ? (
        <TrankYou rating={rating}/ >
        ) : (
       <Rating 
       rating ={rating} 
       setRating={setRating} 
       setShowThankYouPage={setShowThankYouPage}
       />
       )}
    </div>

  );
}

export default App;
