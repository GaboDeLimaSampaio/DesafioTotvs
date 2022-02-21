import React, { useEffect, useState } from 'react'

function App(params) {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])
  return (
    <div>
      <table>
        <thead>
          <th>Nome</th>
          <th>Valor</th>
          <th>Desde</th>
        </thead>
        <tbody>
          {(typeof backendData.users === 'undefined') ? (
            <p>Loading...</p>
          ) : (
            backendData.users.map((user, i) => (
              <tr>
                <td>{user.nome}</td>
                <td>{user.valor}</td>
                <td>{user.desde}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>

  )
}

export default App;