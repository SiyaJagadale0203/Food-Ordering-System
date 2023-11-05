/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/features/Auth.slice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser({ email, password, role: 'user' }));
        navigate('/dashboard');
    }

    return (
        <section className='login-section'>
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleRegister}>
                <div>
                        <label htmlFor="username">Email</label>
                        <input type="username" value={username} onChange={e => setUsername(e.target.value)} id="username" placeholder="Enter Username" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="Enter password" />
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </form>
                <hr />
                <div>
                    <Link to="/order" style={navbarStyles.link}>
                    Orders
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Register