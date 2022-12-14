import React, { useState, useEffect  } from "react";
import axios from "axios";
import styled from 'styled-components';


// Source de login:
//  - https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
//  - https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const [error,setError]=useState();

  

  const handleSubmit = async e => {
    e.preventDefault();
    // send the email and password to the server
    axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/login`, {
        email : email,
        password : password,
      })
    .then((response) => {
        if (response.data.length === 0){
            console.log('Fallo login')
            setError('Usuario o clave inválidos')
        }
        else {
            // set the state of the user
            setUser(response.data)
            // store the user in localStorage
            localStorage.setItem('user', JSON.stringify(response.data))
            console.log(response.data)
            console.log(localStorage.getItem("user"))
            window.location.reload();
        }
        
    }, reason => {
        console.error(reason); // Error!
        console.log('Hubo un error en el servidor')
        setError('Hubo un error en el servidor')
    });
  };

  //useEffect(() => {
  //  const loggedInUser = localStorage.getItem("user");
  //  if (loggedInUser) {
  //    const foundUser = loggedInUser;
  //    setUser(foundUser);
  //  }
  //}, []);

// if there's a user show the message below
  if (user) {
    //return <div>{user.name} is loggged in</div>;
    //setToken(user.token)
    //navigate("/");
  }

  // if there's no user, show the login form
  return (
    <LoginContgainer>
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-white text-black">
                            <div className="card-body p-5 text-center">
                                <form onSubmit={handleSubmit}>
                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2>Incub<span className="text-success">App</span></h2>
                                    <p className="text-black-50 mb-5">Ingrese con su correo y clave registrados</p>

                                    <div className="form-outline form-black mb-4">
                                        <input placeholder="usuario@example.com" type="email" value={email} id="typeEmailX" className="form-control form-control-lg" onChange={({ target }) => setEmail(target.value)} />
                                        <label className="form-label" htmlFor="typeEmailX">Correo</label>
                                    </div>

                                    <div className="form-outline form-black mb-4">
                                        <input type="password" value={password} id="typePasswordX" className="form-control form-control-lg" onChange={({ target }) => setPassword(target.value)} />
                                        <label className="form-label" htmlFor="typePasswordX">Clave</label>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-black-50" href="#!">¿Olvidó su contraseña?</a></p>

                                    <div className="form-outline form-black mb-4">
                                        <button className="btn btn-outline-success btn-lg px-5" type="submit">Ingresar</button>
                                    </div>

                                    {error?
                                        <div className="p-3 mb-2 bg-danger text-white">{ error }</div>
                                    :null} 

                                </div>

                                <div>
                                    <p className="mb-0">¿No posee cuenta? <a href="/registrarse" className="text-black-50 fw-bold">Registrarse</a></p>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>      
    </LoginContgainer>
    
  );
};

export default Login;

const LoginContgainer = styled.div`
    position: absolute;
    background-color: #48a345;
    width: 100%;
    height: 100%;

    h2{
        font-size: 1.8em;
        color: black;
        font-weight: 400;
        margin-left: 2%;
    }
`