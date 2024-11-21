const mockData = {
    users: [
      { id: 1, name: "John Doe", role: "Admin", status: "Active" },
      { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
    ],
    roles: [
      { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
      { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    ],
  };
  
  export const mockApi = {
    fetchUsers: () => Promise.resolve([...mockData.users]),
    fetchRoles: () => Promise.resolve([...mockData.roles]),
    updateUser: (user) =>
      Promise.resolve({ success: true, updatedUser: { ...user } }),
    addRole: (role) =>
      Promise.resolve({
        success: true,
        newRole: { ...role, id: mockData.roles.length + 1 },
      }),
    updateRole: (role) =>
      Promise.resolve({ success: true, updatedRole: { ...role } }),
  };
  
  