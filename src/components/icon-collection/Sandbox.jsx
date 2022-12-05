import React, {useState} from 'react';
import TabBar from '../tabbar/TabBar';
import TabBarItem from '../tabbar/TabBarItem';
import Button from '../button/Button';
import Icon, {IconNames, IconSizes} from '../icon/icon';
import './Sandbox.css';


const Sandbox = () => {

  const [state, setState] = useState({
    iconSize: IconSizes.presentation
  });

  const changeSize = (clickEvent) => {
    const values = Object.values(IconSizes);
    const index = values.indexOf(state.iconSize) + parseInt(clickEvent.target.dataset.directionindex);
    if (index < values.length && index >= 0) {
      setState({
        iconSize: values[index]
      })
    }
  }

  const onSelectIconSize = (selectEvent) => {
    setState({
      iconSize: selectEvent.target.value
    })
  }

  const IconSizesValues = Object.values(IconSizes);

  const biggestIconSize = IconSizesValues[IconSizesValues.length - 1];
  const lowestIconSize = IconSizesValues[0];

return (
  <>
    <h2 className="text"><span>Icon Collection</span></h2>

    <section className="control">
      <Button data-directionindex="-1" onClick={changeSize} disabled={state.iconSize === lowestIconSize}>-</Button>
      <Button data-directionindex="1" onClick={changeSize} disabled={state.iconSize === biggestIconSize}>+</Button>
      <select value={state.iconSize} onChange={onSelectIconSize} >
      <option key="empty-option" >Select Icon Size</option>
        {Object.entries(IconSizes).map(([key, value]) => (
          <option key={key} value={value}>{key}</option>
        ))}
      </select>
    </section>

    <TabBar vertical>
      {Object.entries(IconNames).map(([key, value]) => (
        <TabBarItem label={key} key={key}>
          <Icon size={state.iconSize} name={value}/>
        </TabBarItem>
      ))}
    </TabBar>
  </>
)};

export default Sandbox;