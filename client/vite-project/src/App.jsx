import { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';
function App() {
  const [message, setMessage] = useState('');

  const getMessage = async () => {
    try {
      const res = await fetch("http://localhost:3000/message");
      if (!res.ok) {  // Check if the response is ok (status in the range 200-299)
        throw new Error('Network response was not ok');
      }
      const data = await res.json();  // Parse the JSON response
      setMessage(data.message);       // Set the message state
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <>
      <h1>{message}</h1> {/* Display the fetched message */}
      <Button />
    </>
  );
}

export default App;