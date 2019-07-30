import React from 'react';

const Skill = ({ className, skillName, about, src, alt }) => (
  <div className={className}>
    <img className="skillImg" src={src} alt={alt}/>
    <h3>{skillName}</h3>
    <p>{about}</p>
  </div>
);

export default Skill;
