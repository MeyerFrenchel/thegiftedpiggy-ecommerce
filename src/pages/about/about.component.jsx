import React from 'react';
import Fotografie from '../../assets/img/Paul-Padurariu-fotografie-craciun2020-12.jpg';
import './about.styles.scss';

const AboutPage = () => (
    <div className='aboutpage'>
     
     <img className='fotografie' src={Fotografie} alt="alina-foto"/>       
    <div className='about-alina'>
    <h2>CINE SUNT EU ?</h2>
    <p className='info'>Mă numesc Alina Frenchel. Sunt o mămică entuziasmata de meșteșugărit, mi-am dezvoltat aceasta pasiune în momentul în care am rămas însărcinată și mi-am dorit tot felul de accesorii pentru prințesă mea.</p>
    </div>
    
    
    </div>
);

export default AboutPage;