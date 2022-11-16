import React from 'react'
import styled from 'styled-components'

const Notification = (props) => {

  return (
    <>
        <Notif style={{ visibility: props.isOpen ? 'visible': 'hidden'}}>
            <p style={{ color:'#929292aa', paddingLeft: '10px' }}>Notificaciones</p>
            <div className="data">
                <span><strong>Jorge Ramirez</strong> quiere contactarte!!</span>
                <p style={{ color:'#AAAA' }}>Poryecto: Mesita de Luz Smart</p>
                <a className="contactar" href="/">Contactar</a>
            </div>
            <div className="data">
                <span><strong>Susana Giachetti</strong> quiere contactarte!!</span>
                <p style={{ color:'#AAAA' }}>Poryecto: Mesita de Luz Smart</p>
                <a className="contactar" href="/">Contactar</a>
            </div>
            <div className="data">
                <span><strong>UTN Cordoba, Dpto. Sistemas</strong> quiere contactarte!!</span>
                <p style={{ color:'#AAAA' }}>Poryecto: Proyecto de Prueba 007</p>
                <a className="contactar" href="/">Contactar</a>
            </div>
        </Notif>
    </>
  )
}

export default Notification

const Notif = styled.div`
    background-color: white;
    border-radius: 10px;
    border-color: #CCCC;
    box-shadow: 0px 5px 15px 1px #aaa;
    margin: 10px 7px;
    padding: 4px 5px 10px 5px;
    position: fixed;
    top: 70px;
    right: 30px;
    z-index: 100;
    .data{
        height: 70px;
        padding: 16px 8px;
        margin: 5px 2px;
        border-bottom: 1px solid #d9d9d9;
        position: relative;
    }
    .data:hover{
        background-color: #c6f7c488;
    }
    .contactar{
        position: absolute;
        bottom: 5px;
        right: 10px;
        font-size: smaller;
        text-decoration: none;
        color: #48a345;
    }
`