import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon, {IconSizes, IconNames} from '../icon/icon';
import Button from '../button/Button';

import './Modal.css';

const Modal = ({
  title = 'Modal title', 
  isOpen = false, 
  onCancel = () => {}, 
  onSubmit = () => {}, 
  children = null,
  iconName = '',
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                <Icon name={IconNames.Close} size={IconSizes.medium} onClick={onCancel} />
              </div>
              <div className="modalBody">
                {children}
              </div>
              <div className="modalFooter">
                <Button onClick={onCancel} invert>Cancel</Button>
                <Button onClick={onSubmit}>Yes</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;