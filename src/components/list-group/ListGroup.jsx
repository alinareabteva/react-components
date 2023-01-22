import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroup.css';

const ListGroup = ({
  children = null, 
  className = '', 
  tag: Tag = 'ul', 
  ...attrs
}) => {
  const classes = classNames(
    'list-group',
    className,
  );

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default ListGroup;