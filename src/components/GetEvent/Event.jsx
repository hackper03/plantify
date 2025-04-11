import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const Event = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/events')
//             .then(response => {
//                 setEvents(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the events!', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Events</h1>
//             <ul>
//                 {events.map(event => (
//                     <li key={event.ID}>
//                         <h2>{event.name}</h2>
//                         <p>{event.description}</p>
//                         <p>{event.location}</p>
//                         <p>{new Date(event.date_time).toLocaleString()}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
const Event = () => {
  return (
    <div>Event</div>
  )
}

export default Event;