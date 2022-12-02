import React from 'react';
import Badge from './badge';
import Button from '../button/Button';
import Icon, {IconNames, IconSizes} from '../icon/icon';

const Sandbox = () => (
  <>

    <h2 className="text"><span>1. Badges with text:</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon  name={IconNames.Letter} size={IconSizes.small}/>
      <Badge value="new" />
    </Button>
    <Button>
      <Icon name={IconNames.Letter} size={IconSizes.small} />
      <Badge circle value="new" />
    </Button>

    <h2 className="text"><span>2. Badges with number:</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name={IconNames.Message} size={IconSizes.small} />
      <Badge value={2} />
    </Button>
    <Button>
      <Icon name={IconNames.Message} size={IconSizes.small}  />
      <Badge circle value={12} />
    </Button>

    <h2 className="text"><span>3. Inline Badges:</span></h2>
    <Button style={{ marginRight: '20px' }}>
    <div className="position">
      <Icon name={IconNames.Phone} size={IconSizes.small}  />
      <Badge inline value={1} />
      </div>
    </Button>
    <Button>
    <div className="position">
      <Icon name={IconNames.Phone} size={IconSizes.small} />
      <Badge inline value="1 missed" />
      </div>
    </Button>

    <h2 className="text"><span>4. Outer Badges:</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name={IconNames.Notification} size={IconSizes.small} />
      <Badge outer value={11} />
    </Button>
    <Button>
      <Icon name={IconNames.Wifi} size={IconSizes.small} />
      <Badge outer warning value={3} />
    </Button>

    <h2 className="text"><span>5. Warning, Alert, Success, Info Badges:</span></h2>
    <Button style={{ marginRight: '20px', marginBottom: '20px' }}>
      <Icon name={IconNames.Warning} size={IconSizes.small} />
      <Badge circle warning value={3} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name={IconNames.Alert} size={IconSizes.small} />
      <Badge circle alert value={5} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name={IconNames.Success} size={IconSizes.small} />
      <Badge circle success value={17} />
    </Button>
    <Button>
      <Icon name={IconNames.Info} size={IconSizes.small} />
      <Badge circle info value={8} />
    </Button>
    <br />
    <Button style={{ marginRight: '20px' }}>
      <Icon name={IconNames.Warning} size={IconSizes.small} />
      <Badge warning value={3} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name={IconNames.Alert} size={IconSizes.small} />
      <Badge alert value={5} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name={IconNames.Success} size={IconSizes.small} />
      <Badge success value={17} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name={IconNames.Info} size={IconSizes.small} />
      <Badge info value={8} />
    </Button>

  </>
);

export default Sandbox;