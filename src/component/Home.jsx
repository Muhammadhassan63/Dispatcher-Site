import React from 'react';
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Instructions for Police Dispatchers</h2>
        <p className="mb-4">
          Welcome to the Police Dispatcher App! As a police dispatcher, your role is crucial in managing and coordinating
          emergency response and ensuring public safety. Here are some instructions to help you operate efficiently:
        </p>
        <ol className="list-decimal list-inside">
          <li className="mb-2">
            Receive Emergency Calls: Answer incoming emergency calls and gather necessary information such as the caller's
            location, nature of the emergency, and any additional details. Remain calm, courteous, and professional during
            the conversation.
          </li>
          <li className="mb-2">
            Dispatch Officers: Based on the information received, determine the appropriate response and dispatch
            police officers to the location. Provide clear instructions and relay important details to the responding
            officers.
          </li>
          <li className="mb-2">
            Monitor Incidents: Keep track of ongoing incidents and update officers as needed. 
          </li>
          
          <li className="mb-2">
            Communicate Effectively: Use efficient communication channels to relay important information to officers,
            such as updates, suspect descriptions, or safety alerts. Maintain clear and concise communication to ensure
            effective coordination.
          </li>
        </ol>
        <p>
          Remember, your role as a police dispatcher plays a vital part in protecting the community and ensuring public
          safety. Stay focused, stay alert.
        </p>
      </div>
    </div>
  );
};

export default Home;
