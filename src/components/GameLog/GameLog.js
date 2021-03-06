import React from 'react';

const GameLog = ({ 
    history
}) => (
      
      <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">History</th>
            </tr>
        </thead>
        <tbody>
        { history.map(index => (
            <tr key={index}>
                <th scope="row">#</th>
                        <td>{ index }</td>      
            </tr>
            ))}  
        </tbody>
    </table>
)

export default GameLog;