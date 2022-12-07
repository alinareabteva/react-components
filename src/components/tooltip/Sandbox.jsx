import React from 'react';
import Tooltip from './Tooltip';
import Button from '../button/Button';

const Sandbox = () => (
  <>
    <h2 className="text"><span>1. Simple Right tooltip with big description:</span></h2>
    <Tooltip
      position="right"
      content="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
    >
      HTML
    </Tooltip>

    <h2 className="text"><span>2. Left tooltip with outer styles:</span></h2>
    <Tooltip
      position="left"
      content="Organization for Security and Co-operation in Europe"
    >
      OSCE
    </Tooltip>

    <h2 className="text"><span>3. Bottom tooltip of custom component:</span></h2>
    <Tooltip
      position="bottom"
      content="Close"
    >
      <Button>Exit</Button>
    </Tooltip>

    <h2 className="text"><span>4. Top tooltip of text element:</span></h2>
    <p className="all-text">You'll learn
    <Tooltip
      position="top"
      content="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
    >
      <span style={{ textDecoration: 'underline', padding: '0 4px' }}>CSS</span>
    </Tooltip>
    fundamentals like the box model, cascade and specificity, flexbox, grid and z-index. And, along with these fundamentals, you'll learn about functions, color types, gradients, logical properties and inheritance to make you a well-rounded front-end developer, ready to take on any user interface.</p>
  </>
);

export default Sandbox;