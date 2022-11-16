import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import IdeaSummary from '../homepage/IdeaSummary';
import Login from '../login/Login'
import axios from "axios";

function FormIdea({ user }) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [presupuesto, setPresupuesto] = useState("");
    const [cronologia, setCronologia] = useState("");
    const [email, setEmail] = useState("");

    const [error,setError]=useState();
    const [success,setSuccess]=useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const loggedInUser = JSON.parse(localStorage.getItem("user"))[0];
        console.log(loggedInUser.id)
        // send the username and password to the server
        axios.post(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/upload_idea`, {
        nombre : nombre,
        descripcion: descripcion,
        presupuesto: presupuesto,
        cronologia : cronologia,
        email : email,
        id_user : loggedInUser.id,
        })
        .then((response) => {
            // store the user in localStorage
            console.log(response.data)
            setError(undefined)
            setSuccess('Idea cargada con éxito')
            

            
        }, reason => {
            console.error(reason); // Error!
            console.log('Hubo un error en el servidor')
            setError('Hubo un error en el servidor')
        });
      };

    // Si el usuario no esta autenticado, redirijo a Login
    if(!user) {
        return <Login/>
    }
    return (
        <>
            <IdeaForm>
            <section className="gradient-custom">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">

                            <div className="card-body text-center">
                                <form onSubmit={handleSubmit}>
                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2>Carga de nueva <span className="text-success">Idea</span></h2>
                                    <p className="text-black-50 mb-5">Ingrese los datos de la idea que desea subir</p>

                                    <div className="form-outline form-black mb-4 text-left">
                                        <label className="form-label" htmlFor="typeText1">Nombre</label>
                                        <input placeholder="Nombre de la idea" type="text" value={nombre} id="typeText1" className="form-control form-control-lg" onChange={({ target }) => setNombre(target.value)} />
                                    </div>

                                    <div className="form-outline form-black mb-4 text-left">
                                        <label className="form-label" htmlFor="typeText2">Descripción</label>
                                        <input placeholder="Descripción general de la idea" type="text" value={descripcion} id="typeText2" className="form-control form-control-lg" onChange={({ target }) => setDescripcion(target.value)} />
                                    </div>

                                    <div className="form-outline form-black mb-4 text-left">
                                        <label className="form-label" htmlFor="typeText3">Presupuesto</label>
                                        <input placeholder="$500.000" type="text" value={presupuesto} id="typeText3" className="form-control form-control-lg" onChange={({ target }) => setPresupuesto(target.value)} />
                                    </div>

                                    <div className="form-outline form-black mb-4 text-left">
                                        <label className="form-label" htmlFor="typeText4">Cronología</label>
                                        <input placeholder="Origen de la idea" type="text" value={cronologia} id="typeText4" className="form-control form-control-lg" onChange={({ target }) => setCronologia(target.value)} />
                                    </div>

                                    <div className="form-outline form-black mb-4 text-left">
                                        <label className="form-label" htmlFor="typeEmailX">Correo</label>
                                        <input placeholder="usuario@example.com" type="email" value={email} id="typeEmailX" className="form-control form-control-lg" onChange={({ target }) => setEmail(target.value)} />
                                    </div>

                                    <div className="form-outline form-black mb-4">
                                        <button className="btn btn-outline-success btn-lg px-5" type="submit">Subir idea</button>
                                    </div>

                                    {error?
                                        <div className="p-3 mb-2 bg-danger text-white">{ error }</div>
                                    :null} 

                                </div>
                                </form>
                            </div>

                    </div>
                </div>
            </div>
            </section>
            </IdeaForm>

        </>
    );
}

export default FormIdea

const IdeaForm = styled.div`

        background-color: white;
        height: auto;
        width: 50%;
        border-radius: 10px;
        box-shadow: 0px 5px 15px 1px #aaa;
        margin: 20px auto;
        padding: 1px 0px 20px;

    .formulario{
        margin-left: auto;
        margin-right: auto;

    }

    .formulario div {
        width:95%;
        margin-left: 20%

    }

    .idnombre {
        margin-top: 20px;
    }

    .formulario label {
        display: block;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 5px;
        color: #1f1f1f;
    }

    .formulario input,
    .formulario textarea {
        font-family: 'Open Sans', sans-serif;
        width: 60%;
        border-radius: 5px;
        border: 2px solid #e2e2e2;
        font-size: 18px;
        padding: 10px;
        margin-bottom: 5px;
        color: #1f1f1f;
    }

    .formulario input:focus {
        outline: none;
        border: 2px solid #306d2e;
    }

    .formulario .error {
        color: #e92b2d;
        font-weight: 600;
        font-size: 12px;
    }

    .formulario button[type="submit"] {
        display: block;
        background: #48a345;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        border: none;
        cursor: pointer;
        width: 60%;
        padding: 10px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        transition: .3s ease all;
        margin: 5px auto;
    }

    .formulario button[type="submit"]:hover {
        background: #306d2e;
    }

    .formulario .exito {
        text-align: center;
        font-size: 14px;
        padding-top: 20px;
        color: #02a802;
    }

    .formulario input[type="radio"] {
        width: auto;
    }
`