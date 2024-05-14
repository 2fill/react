import React from 'react';
import './Gallery.css';

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';

function Gallery() {
  return (
    <>
      <div className="gallery-container" style={{ backgroundImage: "url('../../back.jpg')" }}>
        <h2>Gallery</h2>
        <Card
          img = {img1}
          title = "초코비 짱구"
          date = "2024.03.24"
        />
        <Card
          img = {img2}
          title = "주먹밥 짱구"
          date = "2024.03.25"
        />
        <Card
          img = {img3}
          title = "오뎅탕 짱구"
          date = "2024.03.26"
        />
        <Card
          img = {img4}
          title = "주먹밥 짱구"
          date = "2024.03.27"
        />
        <Card
          img = {img5}
          title = "브런치 짱구"
          date = "2024.03.28"
        />
        <Card
          img = {img6}
          title = "케이크 짱구"
          date = "2024.03.29"
        />
        <Card
          img = {img7}
          title = "스테이크 짱구"
          date = "2024.03.30"
        />
        <Card
          img = {img8}
          title = "킹크랩 짱구"
          date = "2024.03.31"
        />
      </div>
    </>
  );
}

function Card(props){
  return(
    <div className="card">
      <img src={props.img}></img>
      <h4>{props.title}</h4>
      <p>{props.date}</p>
    </div>
  )
}

export default Gallery;