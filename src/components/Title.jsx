import React from 'react';

const Title = ({ descr }) => (
  <div className="title">
    <h1>Hello.</h1>
    <p className="description">{descr}</p>
    <a className="button" download href="../favicon.ico">Download Resume</a>
  </div>
);

export default Title;
