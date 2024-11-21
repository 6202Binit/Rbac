import React, { useEffect, useState } from "react";
import { mockApi } from "../utills/mockApi";
import './Permissions.css';

const PermissionsManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    mockApi.fetchRoles().then(setRoles);
  }, []);

  const updatePermissions = (roleId, permissions) => {
    const updatedRoles = roles.map((role) =>
      role.id === roleId ? { ...role, permissions } : role
    );
    setRoles(updatedRoles);
  };

  return (
    <div className="permissions-container">
      <h2 className="permissions-header">Permissions Management</h2>
      {roles.map((role) => (
        <div key={role.id} className="role-section">
          <h4 className="role-name">{role.name}</h4>
          <input
            className="permissions-input"
            type="text"
            value={role.permissions.join(", ")}
            onChange={(e) =>
              updatePermissions(role.id, e.target.value.split(", "))
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PermissionsManagement;
