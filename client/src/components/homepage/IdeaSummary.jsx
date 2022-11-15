import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import smart from '../../images/smart.png'
import emptyLike from '../../images/empty-like.png'
import filledLike from '../../images/filled-like.png'
import { Link } from 'react-router-dom'


function IdeaSummary(props) {

    const [liked, setLike] = useState(props.saved)
    const handleLike = () => {
        setLike(!liked);
    }

    const [ideas, setIdea] = React.useState(null);

    React.useEffect(() => {
        axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/getIdeas`, {
        }).then((response) => {
          setIdea(response.data);
          console.log(response.data)
        });
    }, []);

  if (!ideas) return (
    <>
      No hay ideas cargadas
    </>
  );

  return (
    <>
      {ideas.map((idea, index) => (
        <div key={index}>
        <Idea>
            <div className="head">
                <div>
                    <p className="title">{idea.nombre}</p>
                    <span className="creator">por <strong>{idea.nombre_emp} {idea.apellido_emp}</strong></span>
                    <br></br>
                    <span className="creator">Presupuesto: <strong>{idea.presupuesto}</strong></span>
                </div>
                <img className="like" src={liked ? filledLike : emptyLike} onClick={handleLike} alt="like button"/>
            </div>
            <div className="content" onClick={props.clicked}>
                <img src={smart} alt="Smart"/>
                <p>{idea.descripcion}</p>
            </div>
            <Link className="ver-mas" to={'/detail/' + idea.id} state={{ id: idea.id }}>Más informción...</Link>
        </Idea>
        </div>
      ))}
    </>
  )
}

export default IdeaSummary

const Idea = styled.div`
    background-color: white;
    //height: 450px;
    border-radius: 10px;
    box-shadow: 0px 5px 15px 1px #aaa;
    margin: 20px 10px;
    padding: 1px 30px;
    position: relative;
    .head{
        display: flex;
        justify-content: space-between;
        .title{
            font-size: 3rem;
            margin: 3px 0;
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
            padding-left: 4px;
        }
        .like{
            align-self: center;
            width: 35px;
            cursor: pointer;
        }
        @media (max-width: 768px) {
            margin-left: -17px;
            margin-right: -17px;
        }
    }
    .content{
        display: flex;
        margin-top: 25px;
        img{
            width: 300px;
            /* mantiene la imagen centrada para que no se deforme */
            margin: auto;
            text-align: center;
        }
        p{
            margin: 0 30px;
            font-size: 1.2rem;
            line-height: 1.5;
            height: calc(300px * 0.6);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
            text-overflow: ellipsis;
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
    .ver-mas{
        font-size: 1.2rem;
        position: absolute;
        bottom: 20px;
        right: 25px;
        text-decoration: none;
        color: #306d2e;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .ver-mas:hover{
        color: black;
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