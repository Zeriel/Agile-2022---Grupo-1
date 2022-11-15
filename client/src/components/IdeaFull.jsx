import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import smart from '../images/smart.png'
import emptyLike from '../images/empty-like.png'
import filledLike from '../images/filled-like.png'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Login from './login/Login'

function IdeaFull({ user }, props) {

  

  const [liked, setLike] = useState(props.saved)
    const handleLike = () => {
        setLike(!liked);
    }

  const [ideas, setIdea] = React.useState(null);

  // Obtengo ID de la URL
  let { id } = useParams();
  

    //React.useEffect(() => {
    //    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/getIdea`, {
    //        params: {
    //            id_idea: 1
    //        },
    //    }).then((response) => {
    //      setIdea(response.data[0]);
    //      
    //    });
    //}, []);

    React.useEffect(() => {
        axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/getIdeas`, {
        }).then((response) => {
          setIdea(response.data);
        });
    }, []);

    // Si el usuario no esta autenticado, redirijo a Login
    if(!user) {
        return <Login/>
    }

  if (!ideas) return null;


  return (
    <>
      {ideas.filter(post => {
            
            // Filtro todas las ideas por la del ID de la url
            if ( post.id == id ) {
              return post;
            }

        }).map((idea, index) => (
          <div key={index}>
            <IdeaContainer>
                <div className="header-container">
                    <img className="picture" src={smart} alt="Smart"/>
                    <div className="head">
                        <div className="title-container">
                            <p className="title">{idea.nombre}</p>
                            <p className="creator">por <strong>{idea.nombre_emp} {idea.apellido_emp}</strong></p>
                            <p className="info">Categoría: <strong>Electrónica</strong></p>
                            <p className="info">Presupuesto inicial: <strong>${idea.presupuesto}</strong></p>
                            <p className="info">Prueba/demo: <strong>Link a la demo</strong></p>
                            <Link className="contrib-btn">Quiero Contribuir</Link>
                        </div>
                        <img className="like" src={liked ? filledLike : emptyLike} onClick={handleLike} alt="like button"/>
                    </div>
                </div>
                
                <p className="subtitle"><strong>Una breve introducción</strong></p>
                <p id="summary">{idea.descripcion}</p>

                <p className="historia-title"><strong>Así Comienza Nuestra Historia</strong></p>
                <p className="historia-text">{idea.cronologia}</p>
            </IdeaContainer>
            </div>
      ))}
    </>
  )
}

export default IdeaFull


const IdeaContainer = styled.div`
    width: 80%;
    background-color: white;
    height: 100%;
    margin: 20px auto;
    padding: 1px 30px;
    position: relative;
    .header-container{
        display: flex;
        align-items: flex-start;
        margin-bottom: 25px;
        .picture{
            width: 350px;
            /* mantiene la imagen centrada para que no se deforme */
            margin: auto 30px auto 0;
            align-self: flex-start;
            padding-right: 25px;
            border-right: #48a345 solid 4px;
        }
        .head{
            display: flex;
            justify-content: space-between;
            height: 350px;
            .title-container{
                position: relative;
                .title{
                    margin: 0;
                    font-size: 3rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    @media (max-width: 768px) {
                        font-size: 1.5rem;
                        font-weight: 600;
                    }
                }
                .creator{
                    color: #738a79;
                    font-size: 1.1rem;
                    padding-bottom: 15px;
                }
                .info{
                    color: #494949;
                    font-size: 1.1rem;
                    margin: 10px 0;
                }
            }
            .like{
                margin-left: 30px;
                width: 35px;
                align-self: flex-start;
                cursor: pointer;
            }
            @media (max-width: 768px) {
                margin-left: -17px;
                margin-right: -17px;
            }
        }
        .contrib-btn{
            font-size: 1.2rem;
            text-decoration: none;
            color: white;
            position: absolute;
            bottom: 0;
            padding: 10px 25px;
            background-color: #738a79;
            border-radius: 6px;
        }
        .contrib-btn:hover{
            background-color: #48a345;
        }
        @media (max-width: 768px) {
            flex-direction: column;
            p{
                margin-top: 10px;
                font-size: .9rem;
                height: calc(200px * 0.55);
                -webkit-line-clamp: 5;
            }
            img{
                width: 200px;
            }
        }
    }
    
    .subtitle{
        color: #494949;
        font-size: 1.2rem;
        margin: 3% 0 2% 0;
    }
    #summary{
        font-size: 1.2rem;
        line-height: 1.5;
    }
    .historia-title{
        color: #494949;
        font-size: 1.4rem;
        margin: 3% 0 2% 0;
        text-align: center;
        text-decoration: underline;
    }
    .historia-text{
        font-size: 1.1rem;
        line-height: 1.5;
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding-bottom: 20px;
        position: relative;
        z-index: -5;
    }
`