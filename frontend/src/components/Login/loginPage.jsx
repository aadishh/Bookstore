import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { LoginUser, SignUpForUser } from "../../services/service";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [createUserName, setCreateUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleSignUp = () => {
    let payload = {
      firstName: firstName,
      lastName: lastName,
      userName: createUserName,
      email: email,
      password: signUpPassword,
    };

    SignUpForUser(payload).then((resp) => {
      if (resp?.statusCode === 200) {
        
        setShowSignup(false);
      } else {
        setShowSignup(true);
      }
    });
  };

  const handleLogin = () => {
    let payload = {
      username: username,
      password: password,
    };
    LoginUser(payload).then((resp) => {
      if(resp?.statusCode === 200) {
        // Handle successful login
        console.log("Login successful", resp);
      }
      else {
        console.log("Login failed", resp);
      }
    });
    console.log("firstsda", payload);
    
  };

  return (
    <div className="flex flex-row h-full bg-purple-600">
      <div className="flex my-[2%] mx-[10%] w-full bg-white rounded-3xl">
        {showSignup ? (
          <div className="flex flex-col w-1/2 items-center bg-white  justify-center rounded-2xl">
            <span className="text-4xl font-bold text-indigo pb-6">Signup</span>
            <div className="flex flex-col gap-5 my-4 w-[80%] ">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className=" px-3  py-4 rounded-lg mx-5 border border-gray-200  focus:outline-indigo"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className=" px-3  py-4 rounded-lg mx-5 border border-gray-200  focus:outline-indigo"
              />
              <input
                type="text"
                placeholder="User Name"
                value={createUserName}
                onChange={(e) => {
                  setCreateUserName(e.target.value);
                }}
                className=" px-3  py-4 rounded-lg mx-5 border border-gray-200  focus:outline-indigo"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className=" px-3  py-4 rounded-lg mx-5 border border-gray-200  focus:outline-indigo"
              />
              <input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => {
                  setSignUpPassword(e.target.value);
                }}
                className=" px-3 mx-5 py-4 rounded-lg border border-gray-200  focus:outline-indigo"
              />
            </div>
            <div className="mt-5">
              <CustomButton
                title="Sign Up"
                backgroundColor="bg-indigo"
                textColor="text-white"
                borderClass={`border-indigo`}
                PaddingX="px-40"
                myOnClick={handleSignUp}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-1/2 justify-center items-center bg-white rounded-tl-3xl rounded-bl-3xl">
            <span className="text-4xl font-bold text-indigo">Login</span>
            <div className="flex flex-col gap-5 my-4 w-[80%] ">
              <input
                type="text"
                placeholder="Email Address or Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className=" px-3  py-4 rounded-lg mx-5 border border-gray-200  focus:outline-indigo"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className=" px-3 mx-5 py-4 rounded-lg border border-gray-200  focus:outline-indigo"
              />
            </div>
            <div className="flex flex-row justify-between w-[80%] px-5 text-indigo ">
              <div></div>
              <div className="cursor-pointer text-sm">Forgot Password?</div>
            </div>
            <div className="mt-5">
              <CustomButton
                title="Submit"
                backgroundColor="bg-indigo"
                textColor="text-white"
                borderClass={`border-indigo`}
                PaddingX="px-40"
                myOnClick={handleLogin}
              />
            </div>
            <div className="text-sm mt-5">
              Dont Have an Account?
              <span
                className="text-indigo cursor-pointer"
                onClick={() => setShowSignup(true)}
              >
                Create An Account
              </span>
            </div>
          </div>
        )}

        <div className="w-1/2 p-1">
          <div
            className="w-full h-[100%] bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: "url('/images/login.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

Login.prototype = {};

export default Login;
