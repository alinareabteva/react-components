import React, {useState} from 'react';
import TabBar from '../tabbar/TabBar';
import TabBarItem from '../tabbar/TabBarItem';
import Button from '../button/Button';
import Icon, {IconNames, IconSizes} from '../icon/icon';
import './Sandbox.css';


const Sandbox = () => {

  const [state, setState] = useState({
    iconSize: '',
    rangeValue: 100
  });

  const changeSize = (clickEvent) => {
    const values = Object.values(IconSizes);
    const index = values.indexOf(state.iconSize) + parseInt(clickEvent.target.dataset.directionindex);
    if (index < values.length && index >= 0) {
      setState({
        iconSize: values[index],
        rangeValue: 0
      })
    }
  }

  const onSelectIconSize = (selectEvent) => {
    const iconSize = selectEvent.target.value;
    setState({
      iconSize,
      rangeValue: !iconSize ? 100 : 0
    })
  }

  const onChangeRangeVal = (rangeChangeEvent) => {
    setState({
      iconSize: '',
      rangeValue: rangeChangeEvent.target.value
    })
  }

  const IconSizesValues = Object.values(IconSizes);

  const biggestIconSize = IconSizesValues[IconSizesValues.length - 1];
  const lowestIconSize = IconSizesValues[0]; 

return (
  <>
    <h2 className="text"><span>Icon Collection</span></h2>

    <section className="control">
      {!!state.iconSize && (
        <>
          <Button data-directionindex="-1" onClick={changeSize} disabled={state.iconSize === lowestIconSize}>-</Button>
          <Button data-directionindex="1" onClick={changeSize} disabled={state.iconSize === biggestIconSize}>+</Button>
        </>
      )}
      <select value={state.iconSize} onChange={onSelectIconSize} >
      <option key="empty-option" value="" >Select Icon Size</option>
        {Object.entries(IconSizes).map(([key, value]) => (
          <option key={key} value={value}>{key}</option>
        ))}
      </select>

      <input type="range" disabled={!!state.iconSize} className="custom-range" min="0" max="100" value={state.rangeValue}
       onChange={onChangeRangeVal} />
      <div className="percent-text">{state.rangeValue + " %"}</div>
 
    </section>  
    <TabBar vertical>
      {Object.entries(IconNames).map(([key, value]) => (
        <TabBarItem label={key} key={key}>
          <Icon size={state.iconSize || (state.rangeValue * 50 / 100 ) + '%'} name={value}/>
        </TabBarItem>
      ))}
    </TabBar>
  </>
)};

export default Sandbox;