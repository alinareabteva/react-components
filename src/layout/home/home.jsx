import React from 'react';
import { SOCIAL_CONFIG, DEPENDENCIES } from './constants';
import './home.css';


const Home = () => (
  <>
    <h1 className="title"><span>Collection of React Components</span></h1>
    <p>In this application, I created a component library for <strong>ReactJS</strong> projects.</p>
    <p>The goal is not to create absolutely universal components, but to learn to think in a component style and try to create flexible and reusable modules.</p>
    <p>I have considered creating simple components like buttons, badges, icons, etc. and combining them into more complex components: tabs, chips, modal windows.</p>
    <p>All components are written with esLint validation.</p>
    <h3><span>Dependencies:</span></h3>
    <ul className="dependencies">
      {DEPENDENCIES.map(({ id, name, link }) => (
        <li className="dependencyItem" key={id}>
          <a className="dependencyLink" href={link} rel="noopener noreferrer" target="_blank">{name}</a>
        </li>
      ))}
    </ul>
    <h3><span>Author in social networks:</span></h3>
    <ul className="socialList">
      {SOCIAL_CONFIG.map(({
        id, socialLink, imageLink, imgHeight,
      }) => (
        <li key={id} className="socialItem">
          <a className="socialLink" href={socialLink} rel="noopener noreferrer" target="_blank">
            <img src={imageLink} height={imgHeight} alt={id} />
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default Home;
