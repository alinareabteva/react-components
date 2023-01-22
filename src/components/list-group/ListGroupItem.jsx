import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroupItem.css';

const ListGroupItem = ({
  children = null,
  className = '',
  tag: Tag = 'li',
  disabled = false,
  active = false,
  ...attrs
}) => {
  const classes = classNames(
    'list-group-item',
    className,
    { disabled },
    { active },
  );

  if (attrs.href && Tag === 'li') {
    Tag = 'a';
  }

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

export default ListGroupItem;