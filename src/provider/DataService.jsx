// authContext.js
import React, { createContext, useEffect , useReducer , useContext, useLayoutEffect } from 'react';
// import axiosInstance from '../../../axiosInstance';
import { useNavigate } from 'react-router-dom';

import getEnvVars from '../config/env';


export const DataContext = createContext();

export const DataService = ({ children }) => {
 
 
  return (
    <DataContext.Provider>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
