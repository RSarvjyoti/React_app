// Import React and the useState hook for managing state
import React, { useState } from "react";

// Import faker library to generate fake test data
import { faker } from "@faker-js/faker";

// Import CSS for styling
import "./App.css";

// Main App component
function App() {
  // State to hold generated users (initially empty array)
  const [users, setUsers] = useState([]);

  // Function to generate random users
  const generateUsers = (count = 5) => {
    // Create an array with "count" number of users
    const data = Array.from({ length: count }).map(() => ({
      name: faker.person.fullName(),    // Generate random full name
      email: faker.internet.email(),    // Generate random email
      phone: faker.phone.number(),      // Generate random phone number
    }));

    // Update state with the generated data
    setUsers(data);
  };

  // JSX UI rendering
  return (
    <div className="app">
      {/* Title */}
      <h1>Data Generator Tool</h1>

      {/* Button to generate 10 users when clicked */}
      <button onClick={() => generateUsers(10)}>Generate Users</button>

      {/* Table to display generated data */}
      <table>
        <thead>
          <tr>
            {/* Table headers */}
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through users array and display each user */}
          {users.map((u, i) => (
            <tr key={i}>
              {/* Display user details */}
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export App component for use in index.js
export default App;