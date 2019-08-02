import React from 'react';

const Title = ({ descr }) => (
  <div className="title">
    <h1>Hello.</h1>
    <p className="description">{descr}</p>
    <a className="button" download="Kristof Koncz | Junior Frontend Developer | Resume.pdf" href="resume.pdf">Download Resume</a>
  </div>
);

export default Title;
