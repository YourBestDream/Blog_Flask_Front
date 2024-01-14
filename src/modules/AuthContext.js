import { createContext,useState,useEffect} from "react";
import axios from "axios";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [isLoggedIn,setLoggedIn] = useState(false)

    // useEffect (() => {
    //     const fetchLoggingStatus = async () =>{
    //         try{
    //             const response = await axios.get('/auth/check', { withCredentials: true })
    //             setLoggedIn(response.data.logged)
    //         } catch (error){
    //             console.error('Error fetching status: ', error)
    //         }
    //     }
    //     fetchLoggingStatus()
    // },[])

    // useEffect(() => {
    //     console.log(isLoggedIn);
    // }, [isLoggedIn]);

    const updateLoginStatus = async () => {
        try {
            const response = await axios.get('/auth/check', { withCredentials: true });
            setLoggedIn(response.data.logged);
        } catch (error) {
            console.error('Error fetching status: ', error);
        }
    };

    useEffect(() => {
        updateLoginStatus();
    }, []);

    return (
        <AuthContext.Provider value = {{isLoggedIn, updateLoginStatus}}>
            {children}
        </AuthContext.Provider>
    )
}