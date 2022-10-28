import React from 'react'
import styled from 'styled-components'
import IdeaSummary from './IdeaSummary';

function FormIdea() {
    return (
        <>
            <IdeaForm>
                <form className="formulario">
                    <div className='idnombre'>
                        <label htmlFor="nombre">Nombre Idea</label>
                        <input type="text" id="nombre" name="nombre" placeholder="IncubAPP"/>
                    </div>

                    <div className='iddescripcion'>
                        <label htmlFor="descripcion">Descripcion Idea</label>
                        <input type="text" id="descripcion" name="descripcion" placeholder="Aplicacion para conectar emprendedores con inversionistas"/>
                    </div>

                    <div className='idpresupuesto'>
                        <label htmlFor="presupuesto">Presupuesto Inicial</label>
                        <input type="text" id="presupuesto" name="presupuesto" placeholder="$500.000"/>
                    </div>

                    <div className='idcronologia'>
                        <label htmlFor="cronologia">Cronologia</label>
                        <input type="text" id="cronologia" name="cronologia" placeholder="Cronologia ejemplo"/>
                    </div>


                    <div className='idcreadores'>
                        <label htmlFor="creadores">Creadores</label>
                        <input type="text" id="creadores" name="creadores" placeholder="Federico Moradillo, David Valverde, Luciana Gancia, Jaquelin Monson, Sabbath Rubio"/>
                    </div>

                    <div className='idcorreo'>
                        <label htmlFor="correo">Correo</label>
                        <input type="email" id="correo" name="correo" placeholder="correo@idea.com"/>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
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
        margin: 0px auto;
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