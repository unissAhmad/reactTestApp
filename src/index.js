import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name = 'U Niss';
const img1='https://source.unsplash.com/random/300x450';
const img2='https://source.unsplash.com/random/300x449';
const img3='https://source.unsplash.com/random/300x448';
const img4='https://source.unsplash.com/random/300x447';
ReactDOM.render(
  <>
    <h1 className="heading">My name is {name}</h1>
    <p className="heading exp">Here is my image collection</p>
    <div className="images">
      <img src = {img1} alt = "Random image"/>
      <img src = {img2} alt = "Random image"/>
      <img src = {img3} alt = "Random image"/>
      <img src = {img4} alt = "Random image"/>
    </div>
  </>,
  document.getElementById('root')
);