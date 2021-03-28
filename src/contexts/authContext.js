import { createContext, useState } from "react";
import { Login, Register } from "services/auth";

export const ctx = createContext({});

export default function AuthProvider({ children }) {
  const [jwt, setJwt] = useState(() => localStorage.getItem("jwt"));
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // this state is just temporary , get this state out
  const [isModalVisible, setIsModalVisible] = useState(false);

  function doLogin(args) {
    setIsLoading(true);
    return Login(args)
      .then((jwt) => {
        setJwt(jwt);
        localStorage.setItem("jwt", jwt);
      })
      .catch((error) => setErrorMessage(error))
      .finally(() => setIsLoading(false));
  }

  function doRegister(data) {
    Register(data).then((res) => {});
  }

  function doLogout() {
    setJwt(null);
    localStorage.removeItem("jwt");
  }
  // Get this function out
  function showAuthModal() {
    setIsModalVisible(true);
  }
  function hiddeAuthModal() {
    setIsModalVisible(false);
  }
  return (
    <ctx.Provider
      value={{
        doLogin,
        doLogout,
        doRegister,
        isLogged: Boolean(jwt),
        isLoading,
        isError: Boolean(errorMessage),
        errorMessage,
        jwt,
        showAuthModal,
        hiddeAuthModal,
        isModalVisible,
      }}
    >
      {children}
    </ctx.Provider>
  );
}
