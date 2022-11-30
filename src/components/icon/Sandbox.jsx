import React from 'react';
import Icon, {IconNames, IconSizes} from './icon';
import ButtonGroup from '../button-group/ButtonGroup';
import Button from '../button/Button';

const Sandbox = () => (
  <>

    <h2 className="text"><span>1. Base icon disabled:</span></h2>
    <Icon disabled onClick={() => { console.log('!!!'); }} size={IconSizes.medium}name={IconNames.Atom} />
     
     <h2 className="text"><span>2. Large icon active:</span></h2>
     <Icon onClick={() => { console.log('edit'); }} size={IconSizes.large}name={IconNames.Edit} />


     <h2 className="text"><span>3. Icon with size 8em</span></h2>
    <Icon title="badge" onClick={() => { console.log('DELETE'); }} size={IconSizes.mySize} name={IconNames.Delete} />

    <h2 className="text"><span>4. Home icon functionality:</span></h2>
    <Icon onClick={() => { console.log('home'); }} size={IconSizes.large} name={IconNames.Home}/>

  </>
);

export default Sandbox;