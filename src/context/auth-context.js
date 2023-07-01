import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser, getCurrentUser } from './actions/auth';
import { API_URL } from '../utils/constants';

import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getCurrentUser());
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            axios.get(`${API_URL}profile/profilepersonalfetch/?user_id=${user.user_id}`)
                .then((res) => {
                    console.log(res);
                    setUserProfile(res.data.results[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [user])

    const login = async (userData) => {
        const data = await loginUser(userData);
        setUser(data);
    };

    const register = async (userData) => {
        await registerUser(userData);
    };

    const logout = () => {
        logoutUser();
        setUser(null);
        setUserProfile(null);
        setIsAuthenticated(false);
    };

    const checkAuth = () => {
        const user = getCurrentUser();
        setUser(user);
    };

    const value = {
        user,
        isAuthenticated,
        login,
        register,
        logout,
        checkAuth,
        userProfile,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
