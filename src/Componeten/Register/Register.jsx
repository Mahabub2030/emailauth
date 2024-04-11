import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebaseConfig";
import { useState } from "react";

const Register = () => {
        const [RegisterError , setRegisterError] = useState ('');
        const [success ,setSuccess] = useState ('');
 
        const handelRegister = e =>{
                e.preventDefault();
                console.log('frome submoting');
                const email = e.target.email.value;
                const password = e.target.password.value;

                console.log(email, password);
                // rest error
                setRegisterError('');
                setSuccess('');

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
                                        <input className="mb-4 w-3/4 py-2 px-4" type="email" name="email" id="" placeholder="Your-Email" required />
                                        <br />
                                        <input className="mb-4 w-3/4 py-2 px-4" type="password" name="password" id="" placeholder="Enter Your Password" required />
                                        <br />
                                        <input className="mb-4 w-3/4 btn btn-primary"  type="submit" value="Regstier" />
                                </form>
                                {
                                        RegisterError  && <p className="text-red-500">(RegisterError)</p>
                                }
                                {
                                        success && <p className="text-green-500">(success)</p>
                                }
                        </div>
                </div>
        );
};

export default Register;