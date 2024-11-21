import React from "react";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionsManagement from "./components/PermissionsManagement";

const App = () => {
  return (
    <div>
      <h1>RBAC Admin Dashboard</h1>
      <UserManagement />
      <RoleManagement />
      <PermissionsManagement />
    </div>
  );
};

export default App;
