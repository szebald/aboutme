import React from 'react';

const Title = ({ descr, src, alt }) => (
  <div className="title">
    <img className="profImg" src={src} alt={alt} />
    <h1>Hello.</h1>
    <p className="description">{descr}</p>
  </div>
);

export default Title;
