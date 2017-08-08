import React, { Component } from 'react';
import cat from 'images/cat';

const hello = () => {
  return (
    <div className="container">

      <div className="image-wrapper">
        <img src={cat} className="image-wrapper__image" alt=""/>
      </div>

    </div>
  )
}

export default hello;