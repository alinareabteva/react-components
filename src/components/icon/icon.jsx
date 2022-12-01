import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {PencilIcon as EditIcon} from "./icons/PencilIcon";
import {AtomIcon} from "./icons/AtomIcon";
import {DeleteIcon} from "./icons/DeleteIcon";
import {HomeIcon} from "./icons/HomeIcon";
import {SpinnerIcon} from "./icons/SpinnerIcon";
import {AvatarIcon} from "./icons/AvatarIcon";
import {CloseIcon} from "./icons/CloseIcon";

import './icon.css';

export const IconNames = Object.freeze({
  Edit: 'edit',
  Atom: 'atom',
  Delete: 'delete',
  Home: 'home',
  Spinner: 'spinner',
  Avatar: 'avatar',
  Close: 'close',
})

export const IconSizes = {
  small: '1em',
  medium: "3em",
  large: '5em',
  mySize: '8em'
}

const IconByName = {
  [IconNames.Edit]: EditIcon,
  [IconNames.Atom]: AtomIcon,
  [IconNames.Delete]: DeleteIcon,
  [IconNames.Home]: HomeIcon,
  [IconNames.Spinner]: SpinnerIcon,
  [IconNames.Avatar]: AvatarIcon,
  [IconNames.Close]: CloseIcon,
}

const Icon = ({
  name = '', 
  className = '', 
  size = null, 
  onClick = null, 
  disabled = false,
  ...attrs
}) => {
  const classes = classNames({
    'icon-wrapper': true,
    [className]: !className,
    disabled,
    action: !!onClick
  });
  const IconToRender = IconByName[name];
  if (!IconToRender) {
    return null;
  }

  return (
    <span style={{width: size}}className={classes} onClick={disabled ? undefined : onClick}>
      <IconToRender {...attrs}/>
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(IconNames)),
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(IconSizes)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Icon;