import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import { login } from "../utils/auth";
import "./register.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <svg id="corner" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" width="920" height="550" version="1.1"><g transform="translate(-108.4087965705487 -17.32100474273696)"><path d="M170.1 -237.8C255.8 -245.1 385.1 -271 476.5 -234.5C567.9 -198 621.5 -99 597.1 -14.1C572.7 70.8 470.4 141.7 402.2 218.5C334 295.2 300 378 238.7 393.7C177.3 409.5 88.7 358.2 12.3 337C-64.2 315.8 -128.3 324.6 -173.1 299.3C-217.8 273.9 -243.1 214.5 -282.2 158.9C-321.3 103.3 -374.2 51.7 -384.3 -5.8C-394.4 -63.3 -361.7 -126.7 -332 -198.4C-302.2 -270.1 -275.4 -350.3 -220.5 -360.8C-165.7 -371.3 -82.8 -312.2 -20.3 -277C42.2 -241.8 84.3 -230.4 170.1 -237.8" fill="#33ceaa" /></g></svg>
      <div class="logo"> <img src="./SIX_A740A84A-04FC-4CC6-9EA0-FF579F6ACC20.PNG" alt="" />
      </div>
      <svg id="blob" viewBox="0 0 200 200" >
        <path fill="#33ceaa" d="M43.2,-68.1C51.4,-61.9,50.4,-42.2,51.5,-27.2C52.7,-12.2,55.9,-1.8,57.9,10.7C59.8,23.3,60.4,38.1,54.4,49.6C48.3,61.1,35.5,69.2,23,68.4C10.4,67.6,-1.8,57.8,-13.7,51.9C-25.6,46.1,-37.2,44.1,-45,37.6C-52.7,31.1,-56.7,19.9,-56.6,9.2C-56.5,-1.5,-52.3,-11.8,-49.3,-24.2C-46.2,-36.6,-44.3,-51.3,-36.3,-57.6C-28.3,-63.8,-14.1,-61.7,1.7,-64.3C17.5,-66.9,35,-74.2,43.2,-68.1Z" transform="translate(100 100)" />
      </svg>
      <h4>Sign Up</h4>
      <div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <section className="main">
            <div class="box">
              <div class="card">
                <p class="sign">Create Account</p>
                <form class="form1" onSubmit={handleFormSubmit}>
                  <input class="un" placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.name}
                    onChange={handleChange} />
                  <input class="email" placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange} />
                  <input class="pass" placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange} />
                  <button className="submit" type="submit" onSubmit={handleFormSubmit}>
                    Register
                  </button>
                  <br />
                  <p class="forgot"><a href="login">Log in instead</a></p>
                </form>
              </div>
            </div>

          </section>)}

        {error && <div>{error.message}</div>}
      </div>
      <svg id="bottom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 675" width="900" height="575" version="1.1"><g transform="translate(880.5085219938994 669.3218269157132)"><path d="M157.9 -230C212.7 -177.5 270.9 -142.2 287.6 -92.9C304.3 -43.7 279.6 19.6 249.6 71.5C219.5 123.4 184.1 164.1 141.6 218.1C99.1 272.1 49.6 339.6 -7.4 349.8C-64.5 360.1 -128.9 313.1 -163.5 256.5C-198 199.9 -202.7 133.6 -219.9 73.2C-237.1 12.8 -266.9 -41.8 -247.9 -74.4C-228.8 -106.9 -160.9 -117.5 -111.5 -171.7C-62 -226 -31 -323.9 10.3 -338C51.5 -352.2 103.1 -282.5 157.9 -230" fill="#33ceaa" /></g></svg>
      <div className="fence">
        <img src="/FYFL-no-text.png" alt="fence.logo" />
      </div>
    </main>
  );
};

export default Signup;
