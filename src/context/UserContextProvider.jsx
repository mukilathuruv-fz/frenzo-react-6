import { useContext, createContext, useState, useEffect } from "react";

const userContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    console.log({ currentUser });
  }, [currentUser]);
  const login = userInfo => {
    setCurrentUser(userInfo);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <userContext.Provider value={{ login, currentUser, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

// custom hook for consuming context value
export const useUserContext = () => useContext(userContext);
