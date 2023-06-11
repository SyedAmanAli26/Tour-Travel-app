import './Trip.css'
import React from 'react'
import TripData from './TripData'
import t1 from '../Images/t1.jpg'
import t2 from '../Images/t2.jpg'
import t3 from '../Images/t3.jpg'

function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trip</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
            <TripData
            image={t1}
            heading="Trip in Indonesia"
            text="Indonesia is the largest archipelago in the world. It consists of five major islands and about 30 smaller groups. The islands are located at a crossroads between two oceans, the Pacific and Indian Oceans, and straddles two continents, Asia and Australia/Oceania."
            />
            <TripData
            image={t2}
            heading="Trip in Malaysia"
            text="Malaysia is a federation of 13 states and three federal territories in Southeast Asia. It consists of two regions separated by the South China Sea and is bordered by Brunei, Indonesia, and Thailand. Malaysia has a strategic location along the Strait of Malacca and the southern South China Sea."
            />
            <TripData
            image={t3}
            heading="Trip in France"
            text="France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports."
            />
        </div>
    </div>
  )
}

export default Trip