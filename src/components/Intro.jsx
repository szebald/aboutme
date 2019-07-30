import React from 'react';

const Intro = ({ name, profession, src, alt }) => (
  <div className="intro">
    <h1>I am {name}.</h1>
    <h2>a {profession}.</h2>
    <img className="thatsme" src={src} alt={alt}/>
  </div>
);

export default Intro;
