/** @format */

export const switchRole = (roleCode) => {
  switch (roleCode) {
    case 'ADMIN':
      return 'Admin';
    case 'MARKETING_CORDINATOR':
      return 'Marketing Coordinator';
    case 'MARKETING_MANAGER':
      return 'Marketing Manager';
    case 'STUDENT':
      return 'Student';
    default:
      return 'Invalid Role';
  }
};
