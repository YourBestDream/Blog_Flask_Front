import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login (){
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });

            console.log(response.data);
            navigate('/home')
        } catch (error) {
            console.error('Error during logging in:', error);
        }
    };
    return(
        <div className = "login">
            <form id="registration-form" onSubmit={handleLogin}>
                <input type="email" id="email" placeholder="Email" required />
                <input type="password" id="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}