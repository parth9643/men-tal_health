import React from 'react';
import './Main.css';

const Box = ({ title, content }) => (
  <div className="box">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const Boxes = () => (
  <div className="two-boxes">
    <Box
      title="Box 1 Title"
      content="This is the content of box 1."
    />
    <Box
      title="Box 2 Title"
      content="This is the content of box 2."
    />
  </div>
);

export default Boxes;
