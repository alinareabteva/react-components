/* eslint-disable */
import React from 'react';
import Button from './Button';

const Sandbox = () => (
  <>

    <h2 className="text"><span>1. Text and onClick function:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }}>Button text</Button>

    <h2 className="text"><span>2. Disabled button:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }} disabled />

    <h2 className="text"><span>3. Active button:</span></h2>
    <Button active />

    <h2 className="text"><span>4. Supporting data, type and etc. attributes:</span></h2>
    <Button data-name="button" />
    <Button type="submit" />

    <h2 className="text"><span>5. Button link</span></h2>
    <Button href="test">Link</Button>
    <Button href="test" disabled>Link</Button>

  </>
);

export default Sandbox;
/* eslint-enable */