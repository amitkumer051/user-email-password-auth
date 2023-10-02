import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Register = () => {
    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const name= e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsAccepted = e.target.terms.checked;
        console.log(email, password, termsAccepted);
        setRegError('')
        setRegSuccess('')

        if (password.length < 6) {
            setRegError('Password should be at least 6 characters ')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegError('Please add Upper case Word');
            return;
        } else if (!termsAccepted) {
            setRegError('Please Accept terms and condition')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setRegSuccess('User created successFully');

                //Update Profile
                updateProfile(result.user,{
                    displayName:name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then(()=> console.log('Profile updated'))
                .catch()

                //Send verification email
                sendEmailVerification(result.user )
                .then(()=>{
                    alert('Please Check your email and verify your account')
                })
            })
            .catch(error => {
                console.log(error);
                setRegError(error.message)
            })
    }
    return (
        <div>
            <div className="border-gray-950 border w-1/2 mx-auto p-4 rounded-lg bg-sky-500 ">
                <h2 className="text-3xl mb-6 font-bold text-white">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="border-gray-950 border rounded-md mb-3 py-1 px-3 w-full" type="name" placeholder="Your Name" name="name" required /> <br />

                    <input className="border-gray-950 border rounded-md mb-3 py-1 px-3 w-full" type="email" placeholder="Your Email Address" name="email" required /> <br />

                    <div className="relative">
                        <input className="border-gray-950 border rounded-md py-1 px-3 mb-3  w-full " type={showPassword ? "text" : "password"} placeholder="Your Password" name="password" required />
                        <span className="absolute top-3 right-2 text" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }
                        </span> <br />
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="px-2 text-white font-bold" htmlFor="terms">Accept our <a href="">Terms and Contition</a></label>
                    </div>

                    <input className="btn btn-primary  w-full" type="submit" value='Submit' required />
                </form>
            </div>

            {regError && <p className="text-red-700 text-base">{regError}</p>
            };
            {
                regSuccess && <p className="text-green-700">{regSuccess}</p>
            }
            <p>Already have an account <Link to='/login'>please Log in</Link> </p>
        </div>
    );
};

export default Register;