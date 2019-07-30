import React from 'react';

const Contact = ({ email }) => (
  <div className="contact">
    <h2>Get In Touch</h2>
    <h3>Wanna contact me?</h3>
    <p class="contact-description">If you like my website and want me to do a similar one or a completely different, just send me a message.</p>
    <a class="button" href={email}>CONTACT ME</a>
  </div>
);

export default Contact;
