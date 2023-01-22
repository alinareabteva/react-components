import React from 'react';
import Chip from './chip';
import Example from './example';
import {IconNames} from "../icon/icon"

const Sandbox = () => (
  <>

    <h2 className="text"><span>1. Chip with text:</span></h2>
    <Chip text="User name" />

    <h2 className="text"><span>2. Chip with long text:</span></h2>
    <Chip text="Very long chip text should be cropped" />

    <h2 className="text"><span>3. Chips with icon and close button:</span></h2>
    <div style={{display: "flex"}}>
      <Chip text="Chip" withIcon iconName={IconNames.Avatar} />
      <Chip text="Chip" withClose />
    </div>
    
    <h2 className="text"><span>4. Full Chip:</span></h2>
    <Chip text="Full Chip" withIcon iconName={IconNames.Avatar} withClose />

    <h2 className="text"><span>5. Chip with image:</span></h2>
    <Chip text="React" withImage imageSrc='assets/react.png' imgAlt="react" />

    <h2 className="text"><span>6. Chip with actions on Body and cross-icon:</span></h2>
    <Chip
      text="React"
      withImage
      imageSrc='assets/react.png'
      imgAlt="react"
      onChipClick={() => { console.log('clicked on a chip body'); }}
    />
    <Chip
      text="Angular"
      withImage
      imageSrc='assets/angular.png'
      imgAlt="angular"
      onCloseClick={() => { console.log('clicked on a close icon'); }}
      withClose
    />
    <Chip
      text="Vue"
      withImage
      imageSrc='assets/vue.png'
      imgAlt="vue"
      onCloseClick={() => { console.log('clicked on a close icon'); }}
      onChipClick={() => { console.log('clicked on a chip body'); }}
      withClose
    />

    <h2 className="text"><span>7. Example of using:</span></h2>
    <Example />

  </>
);

export default Sandbox;