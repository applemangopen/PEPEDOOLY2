import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4caf50;
    color: white;
    position: sticky;
    top: 0;
  }
`;

const UserTable = ({ users }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>num</th>
          <th>Email</th>
          <th>Name</th>
          <th>Nickname</th>
          <th>Created_at</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.Users_uid}>
            <td>{user.Users_uid}</td>
            <td>{user.Users_email}</td>
            <td>{user.Users_name}</td>
            <td>{user.Users_nickname}</td>
            <td>{user.Users_created_at}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default UserTable;
