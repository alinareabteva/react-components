import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Spinner} from "../spinner/Spinner";

import './Button.css';

const Button = ({
  children = 'Default button',
  onClick = () => {},
  className = '',
  disabled = false, 
  active = false, 
  fullWidth = false, 
  loading = false, 
  ...attrs
}) => {
  const isDisabled = loading || disabled;

  const onClickAction = e => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    console.log('click')
    onClick(e);
  };

  const classes = classNames(
    'btn',
    className,
    { active },
  );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={classes}
      disabled={isDisabled}
      onClick={onClickAction}
      style={{
        ...(fullWidth && {width: '100%'})
      }}
      {...attrs}
    >
      {loading && <Spinner /> }
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

export default Button;