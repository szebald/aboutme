import React from 'react';
import '../stylesheets/App.scss';
import Intro from '../components/Intro';
import Title from '../components/Title';
import Skills from '../components/Skills';
import HR from '../components/HR';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

function App() {
  return (
    <div>
      <Header />
      <Intro name="Kristof" profession="junior web developer" />
      <Title descr="My name's Kristof Koncz. I'm a junior frontend developer. My passion is photography and cinematography, I like to make videos about cars and weddings. Currently I'm mainly focusing on web development and design." />
      <Skills title="My Skills" />
      <HR />
      <Skill className="skill-row-o" skillName="Web Development" about="I studied full-stack developement at Green Fox Academy, but I think frontend part interests me more. I have experience in HTML & CSS, Javascript, MySQL and other full-stack related technologies such as MERN stack. I'd like to work on stunning web pages in the future." src="https://image.flaticon.com/icons/svg/1055/1055687.svg" />
      <Skill className="skill-row-o" skillName="Making Videos" about="I love to create unique things, currently I'm working at my friend's business as a cinematographer, we're shooting weddings and hotel promo videos. I'm a skillful drone pilot, thus I'm responsible for the aerial footages. Besides, I love to make car related content too." src="https://image.flaticon.com/icons/svg/195/195156.svg" />
      <Skill className="skill-row-o" skillName="Teaching Ski" about="In 2018 I graduated as a Ski Instructor. In the last winter season I have provided trainings for various groups of people with different age and skiing knowledge. I mostly give skiing courses in Austria and Slovenia. My main aim is to help people achieve their goals." src="https://image.flaticon.com/icons/svg/171/171822.svg" />
      <HR />
      <Contact email="mailto:konczkristof@icloud.com" tel="tel:+36305430626" />
      <Footer />
    </div>
  )
}

export default App;
