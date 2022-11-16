import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HamburgerButton from './HamburgerButton';
import Notif from "../notifications/Notification"
import bell from '../../images/bell.png'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleNotification = () => {
      setIsOpen(!isOpen);
  }

  return (
    <>
      <Notif isOpen={isOpen} />
      <NavContainer>
        <h2>Incub<span>App</span></h2>
        <div className={`link ${clicked ? 'active' : ''}`}>
          <a className='hover-link' onClick={handleClick} href="/">Home</a>
          <a className='hover-link' onClick={handleClick} href="/mis-ideas">Mis ideas</a>
          <a className='hover-link' onClick={handleClick} href="/">Mis inversiones</a>
          <a className='hover-link' onClick={handleClick} href="/loadidea">Cargar idea</a>
          <a className='hover-link' onClick={handleLogout}  href="/">Salir</a>
          <a className='hover-link notif' onClick={handleNotification}>
            <img className="icon" src={bell} alt="bell"/>
          </a>
        </div>
        <div className='hamburger'>
          <HamburgerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}/>
      </NavContainer>
    </>
  );
}

export default Navbar

const NavContainer = styled.nav`
    position: relative;
    padding: 20px;
    background-color: #48a345;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
      width: 28px;
      filter: white;
    }
    h2{
        font-size: 1.8em;
        color: white;
        font-weight: 400;
        margin-left: 2%;
        span{
          font-weight: bold;
          color: #bfffbb
        }
    }

    a{
      text-decoration: none;
      margin-right: 1rem;
      transition: all .3s;
    }

    .link{
      position: absolute;
      top: -700px;
      left: -2600px;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: all .5s ease;
      a{
        color: white;
        font-size: 2rem;
        display: block;
      }
      @media (min-width: 768px){
    	  position: initial;
        margin: 0;
        a{
          font-size: 1.3rem;
          color: white;
          //display: inline;  inline-block es para el estilo de hover
          display: inline-block;
        }
      }
    }

    .link.active{
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 30%;
      left: 0;
      right: 0;
      text-align: center;
      a{
        font-size: 2rem;
        margin-top: 1rem;
      }
    }

    // Estilo de hover para links, fuente:
    // https://codepen.io/T3chnician/pen/NORBRG
    .hover-link::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #bfffbb;
      transition: width .3s;
    }

    .hover-link:hover::after {
      width: 100%;
      transition: width .3s;
    }

    // Lo invente yo (Fede) para cambiar el color del texto con hover
    .hover-link:hover {
      color: #bfffbb;
      transition: all .3s;
    }

    .hamburger{
      @media (min-width: 768px){
    	  display: none;
      }
    }

    .notif{
      cursor: pointer;
    }
`

const BgDiv = styled.div`
  background-color: #306d2e;
  position: absolute;
  top: -700px;
  left: -2600px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease;
  &.active{    // & hace referencia al propio elemento. Tambien puede usarse con hover y demás
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`