import React, { useState } from 'react'
import styled from 'styled-components'
import smart from '../images/smart.png'
import emptyLike from '../images/empty-like.png'
import filledLike from '../images/filled-like.png'
import { Link } from 'react-router-dom'


function IdeaFull(props) {

    const [liked, setLike] = useState(props.saved)
    const handleLike = () => {
        setLike(!liked);
    }
  return (
    <>
      <div>
        <div className="header-container">
            <img className="picture" src={smart} alt="Smart"/>
            <div className="head">
                <div className="title-container">
                    <p className="title">Mesita de Luz Smart</p>
                    <p className="creator">por <strong>UTN Fundation</strong></p>
                    <p className="info">Categoría: <strong>Electrónica</strong></p>
                    <p className="info">Presupuesto inicial: <strong>$45.000,00</strong></p>
                    <Link className="contrib-btn">Quiero Contribuir</Link>
                </div>
                <img className="like" src={liked ? filledLike : emptyLike} onClick={handleLike} alt="like button"/>
            </div>
        </div>
        
        <p className="subtitle"><strong>Una breve introducción</strong></p>
        <p ID="summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <p className="historia-title"><strong>Así Comienza Nuestra Historia</strong></p>
        
        <p className="historia-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure enim rem mollitia eveniet ea. Dolor quibusdam consequatur commodi, aliquam molestias pariatur, 
          officiis libero ratione ea, a ipsum quis aperiam.
        </p>
        <p className="historia-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure enim rem mollitia eveniet ea. Dolor quibusdam consequatur commodi, aliquam molestias pariatur, 
          officiis libero ratione ea, a ipsum quis aperiam.
        </p>
      </div>
    </>
  )
}

export default IdeaFull