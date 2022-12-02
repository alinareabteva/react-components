import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon/icon';

import './badge.css';

const Badge = ({
  value, 
  circle = false, 
  className = '',
  iconName = '',
  withIcon = false, 
  inline = false, 
  outer = false, 
  ...attrs
}) => {
  const text = typeof value === 'string' || value instanceof String;

  const classes = classNames(
    'badge',
    { circle },
    className,
    { inline },
    { outer },
    { text },
    { warning: attrs.warning },
    { alert: attrs.alert },
    { success: attrs.success },
    { info: attrs.info },
  );

  return (
    <span className={classes}>
     {withIcon
        && (
        <span className="chipIcon">
          <Icon name={iconName}/>
        </span>
        )
      }
      { value }
    </span>
  );
};

Badge.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  circle: PropTypes.bool,
  className: PropTypes.string,
  iconName: PropTypes.string,
  withIcon: PropTypes.bool,
  inline: PropTypes.bool,
  outer: PropTypes.bool,
};

export default Badge;