import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../services/api';


const AuthContext = createContext({});


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login(login, password) {
        try {
            const { data } = await api.post('auth/login', {
                email: login,
                password
            });

            setUser({
                name: login,
                token: data.access_token
            });

            api.defaults.headers.common.authorization = `Bearer ${data.access_token}`;
            await AsyncStorage.setItem('token', data.access_token);

        } catch (error) {
            alert('Email ou senha incorretos!');
        }
    }

    async function logout() {
        try {
            setUser(null)
            await AsyncStorage.removeItem('token');
        } catch (error) {
            throw new Error('Token not found');
        }
    }

    const load = async () => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            // implementar request para buscar dados do usuário
            setUser({
                email: 'email'
            });
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`;
    }

    useEffect(() => {
        load();
    }, []);


    return (
        <AuthContext.Provider value={{
            logged: Boolean(user),
            login,
            logout
        }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export function useAUth() {
    const context = useContext(AuthContext)

    return context;
}