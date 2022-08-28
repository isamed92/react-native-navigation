import React, {createContext, FC, useReducer} from 'react';
import {authReducer} from './authReducer';

// definir como luce y que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  favoriteIcon: undefined,
  username: undefined,
};

// lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  cambiarUsuario: (username: string) => void;
}

// crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// exponer el proveedore del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type:'logout'})
  }

  const cambiarUsuario = (username: string) => {
    dispatch({type: 'changeUserName', payload: username})
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        cambiarUsuario,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
