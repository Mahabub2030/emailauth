import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebaseConfig";

const Register = () => {

        const handelRegister = e =>{
                e.preventDefault();
                console.log('frome submoting');
                const email = e.target.email.value;
                const password = e.target.password.value;

                console.log(email, password);

                // create user

                createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                        console.log(result.user)
                })
                .catch(error => {
                        console.error(error);
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
                        </div>
                </div>
        );
};

export default Register;