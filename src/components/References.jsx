import React from 'react';

const References = ({ className, refName, about, src, alt }) => (
  <div className={className}>
    <div className="ref">
      <h3>{refName}</h3>
      <img className="refImg" src={src} alt={alt} />
      <p>{about}</p>
    </div>
  </div>
);

export default References;
