import React, {createContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        try {
            const response = fetch('http://localhost:8000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const json = response.json();
            setUser(json.data.token);
        } catch (error) {
            console.error(error);
        }
        AsyncStorage.setItem('user', user);
    }

    const logout = () => {
        setUser(null);
        AsyncStorage.removeItem('user');
    }

    const isLogged = async() => {
        try{
            let user = await AsyncStorage.getItem('user');
            setUser(JSON.parse(user));
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        isLogged();
    }, []);

    return (
        <AuthContext.Provider value = {{login, logout, user}}>
            {children}
        </AuthContext.Provider>
    );
}
