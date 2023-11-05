/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/features/Auth.slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password, role: 'user' }));
        navigate('/dashboard');
    }

    return (
        <section className='login-section'>
            <div>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="Enter password" />
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>

                    <div>
                    <label for="rememberMe">
                    <input type="checkbox" value="lsRememberMe" id="rememberMe"/>Remember me
                    </label>
                    </div>
                
                </form>
                <hr />
                <div className='no-account'>
                    <p>Don't have account</p>
                    <Link to={'/register'}>Sign up</Link>
                </div>
            </div>
        </section>
    )
}

export default Login