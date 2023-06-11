import React from 'react'
import './Destination.css'
import imgp from '../Images/i1.jpg'
import imgp1 from '../Images/i2.jpg'
import imgp2 from '../Images/i3.jpg'
import imgp3 from '../Images/i4.jpg'
import DestinationData from './DestinationData'
const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot within a time frame</p>

            <DestinationData 
            className='first-des'
             heading='Taal Volcano, Batangas' 
             text='Geography. Taal Volcano is part of a chain of volcanoes lining the western edge of the island of Luzon. They were formed by the subduction of the Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies within a 25 to 30 km 16 to 19 mi caldera formed by explosive eruptions between 140,000 and 5,380 BP. Taal Volcano is a large caldera in Batangas that was formed by prehistoric eruptions. In the wake of the eruptions, it was eventually filled by Taal Lake. Throughout history it has erupted about 38 times, making it the second most active volcano in the Philippines.'  
             img1={imgp}
             img2={imgp1}
            />
            <DestinationData 
            className='first-des-reverse'
             heading='Mt. Daguldul, Batangas' 
             text='Geography. Taal Volcano is part of a chain of volcanoes lining the western edge of the island of Luzon. They were formed by the subduction of the Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies within a 25 to 30 km 16 to 19 mi caldera formed by explosive eruptions between 140,000 and 5,380 BP. Taal Volcano is a large caldera in Batangas that was formed by prehistoric eruptions. In the wake of the eruptions, it was eventually filled by Taal Lake. Throughout history it has erupted about 38 times, making it the second most active volcano in the Philippines.'  
             img1={imgp3}
             img2={imgp2}
            />
            
        </div>
    )
}

export default Destination