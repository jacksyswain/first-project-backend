import React, { useState, useEffect } from 'react';

function Usertable() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchuser() {
      const res = await fetch("/api/user");
      const data = await res.json();
      console.log(data);
      setUserData(data);
    }
    fetchuser();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '15px' }}>Here are the users we have</h1>

      <table style={{
        borderCollapse: 'collapse',
        width: '100%',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          <tr>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Age</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : 'white'}
            >
              <td style={cellStyle}>{user.id}</td>
              <td style={cellStyle}>{user.name}</td>
              <td style={cellStyle}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left'
};

export default Usertable;