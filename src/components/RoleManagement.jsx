import React, { useState, useEffect } from "react";
import { mockApi } from "../utills/mockApi";
import './Role.css';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    mockApi.fetchRoles().then(setRoles);
  }, []);

  const addRole = () => {
    const role = { name: newRole, permissions: [] };
    mockApi.addRole(role).then((res) => {
      if (res.success) setRoles([...roles, res.newRole]);
    });
  };

  return (
    <div className="role-management-container">
      <h2 className="role-management-header">Role Management</h2>
      <ul className="role-list">
        {roles.map((role) => (
          <li key={role.id} className="role-item">
            {role.name} - Permissions: {role.permissions.join(", ")}
          </li>
        ))}
      </ul>
      <div className="role-input-container">
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="New Role Name"
          className="role-input"
        />
        <button onClick={addRole} className="role-add-button">Add Role</button>
      </div>
    </div>
  );
};

export default RoleManagement;
