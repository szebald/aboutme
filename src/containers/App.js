import React from 'react';
import '../stylesheets/App.css';
import Intro from '../components/Intro';
import Title from '../components/Title';
import Skills from '../components/Skills';
import HR from '../components/HR';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <Intro name="Kristof" profession="junior web developer" src="https://image.flaticon.com/icons/svg/1955/1955992.svg"/>
      <Title src="https://image.flaticon.com/icons/svg/265/265674.svg" descr="I'm a junior frontend developer. My passion is photography and cinematography, I like to make videos about cars and weddings. Currently I'm mainly focusing on web development and design." />
      <Skills title="My Skills" />
      <HR />
      <Skill className="skill-row-o" skillName="Web Development" about="I studied full-stack developement at Green Fox Academy, but I think frontend part interests me more. I earn some skill " src="https://image.flaticon.com/icons/svg/1055/1055687.svg"/>
      <Skill className="skill-row-e" skillName="Making Videos" about="I love creating unique things, now I work at my friend's individual proprietorship as a cinematographer, we're shooting weddings and hotel promo videos." src="https://image.flaticon.com/icons/svg/195/195156.svg"/>
      <Skill className="skill-row-o" skillName="Teaching Ski" about="In 2018 I graduated as a Ski Instructor and the last winter season I tought skiing for two group of people with different age and skiing knowledge. I really love to help people to earn their goals." src="https://image.flaticon.com/icons/svg/171/171822.svg"/>
      <HR />
      <Contact email="mailto:konczkristof@icloud.com" />
      <Footer />
    </div>
  )
}

export default App;
