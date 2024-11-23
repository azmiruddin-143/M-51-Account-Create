import React, { useContext, useState } from 'react';
import { formContect } from '../../Authform setup/Authform';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { accountLogin } = useContext(formContect)
    const [loginError, setloginError] = useState(null)
    const navigate = useNavigate();

    const loginForm = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        // login setup
        accountLogin(email, password)
            .then((result) => {
                console.log(result.user);
                event.target.reset()
                toast.success("Login successful!");
                setTimeout(() => navigate("/"), 3000);
            })
            .catch((error) => {
                setloginError(error.message);
            })
    }

    return (
        <div className='w-4/12 mx-auto'>
            <form onSubmit={loginForm}>
                <label className="input input-bordered flex items-center my-4 gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" name='email' className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex my-4 items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" name='password' className="grow" placeholder='Password' />
                </label>
                {
                    loginError && <h1 className='text-xl text-red-800'>{loginError}</h1>
                }
                <button className='bg-[#1d718f] py-2 text-white px-9 rounded-xl my-3'>Login</button>
               

            </form>

            <ToastContainer 
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
          
        </div>
    );
};

export default Login;