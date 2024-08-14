import { auth } from "@/firebase/clientApp";

/**
 * Is the current user an admin?
 * @returns {boolean} - true if the user is an admin, false otherwise
 */
export const isAdmin = () => {
    const currentUser = auth.currentUser || null;
    
    // Check if the current user is an admin
    return currentUser && currentUser.email === 'diepdo1810@gmail.com';
  };