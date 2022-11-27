import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {PencilIcon as EditIcon} from "./icons/PencilIcon";
import {AtomIcon} from "./icons/AtomIcon";

import './icon.css';
export const IconNames = Object.freeze({
  Edit: 'edit',
  Atom: 'atom'
})

export const IconSizes = {
  small: '1em',
  medium: "3em",
  large: '5em'
}

const IconByName = {
  [IconNames.Edit]: EditIcon,
  [IconNames.Atom]: AtomIcon
}

const Icon = ({
  name, className, size, onClick, disabled = false, ...attrs
}) => {
  const classes = classNames({
    'icon-wrapper': true,
    className: !className,
    disabled,
    action: !!onClick
  });
  const IconToRender = IconByName[name];
  if (!IconToRender) {
    return null;
  }

  return (
    <div style={{width: size}}className={classes} onClick={disabled ? undefined : onClick}>
      <IconToRender />
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(IconNames)),
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(IconSizes)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  name: '',
  className: '',
  size: null,
  onClick: null,
  disabled: false,
};

export default Icon;