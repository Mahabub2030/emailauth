import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebaseConfig";
import { useState } from "react";

import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
        const [RegisterError, setRegisterError] = useState('');
        const [success, setSuccess] = useState('');

        const [ShowPassword, SetShowPassword] = useState(false);

        const handelRegister = e => {
                e.preventDefault();
                console.log('frome submoting');
                const email = e.target.email.value;
                const password = e.target.password.value;
                const accepted = e.target.terms.checked;

                console.log(email, password ,accepted);

                // rest error
                setRegisterError('');
                setSuccess('');


                if (password.length < 6) {
                        setRegisterError('shoed be password 6 carcter');
                        return;
                }
                else if(!accepted){
                        setRegisterError('Please accept our terms and constion !')
                        return;
                }


                // create user

                createUserWithEmailAndPassword(auth, email, password)
                        .then(result => {
                                console.log(result.user)
                                setSuccess('user Creat done')
                        })
                        .catch(error => {
                                console.error(error);
                                setRegisterError(error.message);
                        })



        }
        return (
                <div>
                        <div className="mx-auto md:w-1/2">
                                <h2 className="text-3xl mb-4">Please regsister </h2>

                                <form onSubmit={handelRegister}>
                                        <input className="mb-4 w-full py-2 px-4" type="email" name="email" id="" placeholder="Your-Email" required />
                                        <br />
                                        <div className=" mb-4 relative ">
                                                <input className=" w-full py-2 px-4"
                                                        type={ShowPassword ? "text" : "password"}
                                                        name="password"
                                                        id="" placeholder="Enter Your Password"
                                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                                                <span className="absolute top-3 right-2 " onClick={() => SetShowPassword(!ShowPassword)}>
                                                        {
                                                                ShowPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                        }
                                                </span>
                                        </div>
                                        <br />
                                        <div className="mb-4">
                                        <input type="checkbox" name="terms" id="" />
                                        <label className="ml-2 mb-4" htmlFor="">Accecpt for <a href="">terams codition</a></label>
                                       
                                        </div>
                                        <br/>

                                        <input className="mb-4 w-full btn btn-primary" type="submit" value="Regstier" />
                                </form>
                                {
                                        RegisterError && <p className="text-red-500">(RegisterError)</p>
                                }
                                {
                                        success && <p className="text-green-500">(success the email)</p>
                                }
                        </div>
                </div>
        );
};

export default Register;