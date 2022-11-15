import React, { useState, useEffect  } from "react";
import axios from "axios";
import styled from 'styled-components';


// Source de login:
//  - https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
//  - https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState()

  const [error,setError]=useState();
  const [success,setSuccess]=useState();

  

  const handleSubmit = async e => {
    e.preventDefault();
    if (password != confirmPassword){
      setError('Las claves no coinciden')
    }
    else {
      // send the username and password to the server
      axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/register`, {
        password : password,
        firstname: firstname,
        lastname: lastname,
        email : email,
      })
      .then((response) => {
          if (response.data == 'repetido'){
            console.log('Mail repetido')
            setError('El correo ' + email + ' ya se encuentra en uso')
          } else {
            // set the state of the user
            setUser(response.data)
            // store the user in localStorage
            localStorage.setItem('user', response.data)
            console.log(response.data)
            console.log(user)
            setError(undefined)
            setSuccess('Registro con éxito. Redirigiendo...')
            setTimeout(function(){
              window.location.href = '/';
          }, 1500);
          }
          

          
      }, reason => {
          console.error(reason); // Error!
          console.log('Hubo un error en el servidor')
          setError('Hubo un error en el servidor')
      });
    }
  };

  // if there's no user, show the register form
  return (
    <RegisterContainer>
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-white text-black">
                            <div className="card-body p-5 text-center">
                                <form onSubmit={handleSubmit}>
                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2>Incub<span className="text-success">App</span></h2>
                                    <p className="text-black-50 mb-5">Complete los datos para su cuenta</p>

                                    <div className="form-outline form-black mb-4">
                                        <input placeholder="usuario@example.com" type="email" value={email} id="typeEmailX" className="form-control form-control-lg" onChange={({ target }) => setEmail(target.value)} />
                                        <label className="form-label" htmlFor="typeEmailX">Correo</label>
                                    </div>

                                    <div className="form-outline form-black mb-4">
                                        <input type="text" value={firstname} id="typeText1" className="form-control form-control-lg" onChange={({ target }) => setFirstname(target.value)} />
                                        <label className="form-label" htmlFor="typeText1">Nombre</label>
                                    </div>

                                    <div className="form-outline form-black mb-4">
                                        <input type="text" value={lastname} id="typeText2" className="form-control form-control-lg" onChange={({ target }) => setLastname(target.value)} />
                                        <label className="form-label" htmlFor="typeText2">Apellido</label>
                                    </div>

                                    <div className="form-outline form-black mb-4">
                                        <input type="password" value={password} id="typePassword1" className="form-control form-control-lg" onChange={({ target }) => setPassword(target.value)} />
                                        <label className="form-label" htmlFor="typePassword1">Clave</label>
                                    </div>

                                    <div className="form-outline form-black mb-4">
                                        <input type="password" value={confirmPassword} id="typePassword2" className="form-control form-control-lg" onChange={({ target }) => setConfirmPassword(target.value)} />
                                        <label className="form-label" htmlFor="typePassword2">Confirme clave</label>
                                    </div>

                                    <div className="form-outline form-black mb-4">
                                        <button className="btn btn-outline-success btn-lg px-5" type="submit">Registrarse</button>
                                    </div>

                                    {error?
                                        <div className="p-3 mb-2 bg-danger text-white">{ error }</div>
                                    :null} 

                                    {success?
                                        
                                        <div className="p-3 mb-2 bg-success text-white">{ success }</div>
                                    :null} 

                                </div>

                                <div>
                                    <p className="mb-0">Volver al  <a href="/" className="text-black-50 fw-bold">login</a></p>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>      
    </RegisterContainer>
    
  );
};

export default Register;

const RegisterContainer = styled.div`
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