import React, { useEffect, useState } from "react";
import { mockApi } from "../utills/mockApi";
import './User.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    mockApi.fetchUsers().then(setUsers);
    mockApi.fetchRoles().then(setRoles);
  }, []);

  const handleStatusChange = (userId, newStatus) => {
    const updatedUser = users.map((user) =>
      user.id === userId ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUser);
  };

  return (
    <div className="user-management-container">
      <h2 className="user-management-header">User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Role</th>
            <th className="table-header">Status</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="table-row">
              <td className="table-data">{user.name}</td>
              <td className="table-data">
                <select
                  value={user.role}
                  onChange={(e) =>
                    setUsers(
                      users.map((u) =>
                        u.id === user.id ? { ...u, role: e.target.value } : u
                      )
                    )
                  }
                  className="role-select"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </td>
              <td className="table-data">
                <select
                  value={user.status}
                  onChange={(e) => handleStatusChange(user.id, e.target.value)}
                  className="status-select"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </td>
              <td className="table-data">
                <button
                  className="delete-button"
                  onClick={() => setUsers(users.filter((u) => u.id !== user.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
