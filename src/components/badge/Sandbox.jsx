import React, {useState} from 'react';
import Badge from './badge';
import Button from '../button/Button';
import Icon, {IconNames, IconSizes} from '../icon/icon';
import './Sandbox.css'

const Sandbox = () => {
  const [state, setState] = useState({
    iconSize: IconSizes.medium
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
    <section className="controls">
      <Button data-directionindex="-1" onClick={changeSize} disabled={state.iconSize === lowestIconSize}>-</Button>
      <Button data-directionindex="1" onClick={changeSize} disabled={state.iconSize === biggestIconSize}>+</Button>
      <select value={state.iconSize}onChange={onSelectIconSize} placeholder="Select IconSize">
        {Object.entries(IconSizes).map(([key, value]) => (
          <option key={key} value={value}>{key}</option>
        ))}
      </select>
    </section>

    <h2 className="text"><span>1. Badges with text:</span></h2>
    <Button className="badge-wrapper">
      <Icon  name={IconNames.Letter} size={state.iconSize} color="white"/>
      <Badge value="new" />
    </Button>
    <Button>
      <Icon name={IconNames.Letter} size={state.iconSize} color="white" />
      <Badge circle value="new" />
    </Button>

    <h2 className="text"><span>2. Badges with number:</span></h2>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Message} size={state.iconSize} color="white"/>
      <Badge value={2} />
    </Button>
    <Button>
      <Icon name={IconNames.Message} size={state.iconSize} color="white" />
      <Badge circle value={12} />
    </Button>

    <h2 className="text"><span>3. Inline Badges:</span></h2>
    <Button className="badge-wrapper">
    <div className="position">
      <Icon name={IconNames.Phone} size={state.iconSize} color="white" />
      <Badge inline value={1} />
      </div>
    </Button>
    <Button>
    <div className="position">
      <Icon name={IconNames.Phone} size={state.iconSize} color="white" />
      <Badge inline value="1 missed" />
      </div>
    </Button>

    <h2 className="text"><span>4. Outer Badges:</span></h2>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Notification} size={state.iconSize} color="white"/>
      <Badge outer value={11} />
    </Button>
    <Button>
      <Icon name={IconNames.Wifi} size={state.iconSize} color="white"/>
      <Badge outer warning value={3} />
    </Button>

    <h2 className="text"><span>5. Warning, Alert, Success, Info Badges:</span></h2>
    <section>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Warning} size={state.iconSize} color="white"/>
      <Badge circle warning value={3} />
    </Button>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Alert} size={state.iconSize} color="white"/>
      <Badge circle alert value={5} />
    </Button>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Success} size={state.iconSize} color="white"/>
      <Badge circle success value={17} />
    </Button>
    <Button>
      <Icon name={IconNames.Info} size={state.iconSize} color="white"/>
      <Badge circle info value={8} />
    </Button>
    </section>
    <section>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Warning} size={state.iconSize} color="white"/>
      <Badge warning value={3} />
    </Button>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Alert} size={state.iconSize} color="white"/>
      <Badge alert value={5} />
    </Button>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Success} size={state.iconSize} color="white"/>
      <Badge success value={17} />
    </Button>
    <Button className="badge-wrapper">
      <Icon name={IconNames.Info} size={state.iconSize} color="white"/>
      <Badge info value={8} />
    </Button>
    </section>

  </>
)};

export default Sandbox;