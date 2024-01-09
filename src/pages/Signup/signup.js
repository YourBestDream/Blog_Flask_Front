import './signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup (){
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const firstName = event.target['first-name'].value;
        const lastName = event.target['last-name'].value;
        const password = event.target.password.value;
        const confirmPassword = event.target['confirm-password'].value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('/signup', {
                email,
                firstName,
                lastName,
                password
            });

            console.log(response.data);
            alert('Registration successful!');
            navigate('/home')
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed!');
        }
    };
    return(
        <div className = "signup">
            <form id="registration-form" onSubmit={handleSubmit}>
                <input type="email" id="email" placeholder="Email" required />
                <input type="text" id="first-name" placeholder="First Name" required />
                <input type="text" id="last-name" placeholder="Last Name" required />
                <input type="password" id="password" placeholder="Password" required />
                <input type="password" id="confirm-password" placeholder="Confirm Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}