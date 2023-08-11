import React from 'react';
import './style.css';

const Table = ({ isLoading, columns, data, onRowClick = () => {} }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column.key + index}>{column.title}</th>
            ))}
          </tr>
        </thead>

        {!isLoading && (
          <tbody>
            {data?.map((row, index) => (
              <tr key={row._id + index} onClick={() => onRowClick(row)}>
                {columns.map((column, index) => (
                  <td key={`${row._id + column.key + index}`}>
                    {column.render
                      ? column.render(row)
                      : Array.isArray(row[column.key])
                      ? row[column.key].join(' - ')
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {isLoading && <h1>Loading...</h1>}
    </>
  );
};

export default Table;
