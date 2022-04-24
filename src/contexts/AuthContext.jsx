import { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext({});


export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    async function login(login, password) {
        setUser({
            name: login
        })
    }

    async function logout() {
        setUser(null)
    }


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