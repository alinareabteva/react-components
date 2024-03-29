import React from 'react';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import Badge from '../badge/badge';
import Button from '../button/Button';

const Sandbox = () => (
  <>

    <h2 className="text"><span>1. Base Group list:</span></h2>
    <ListGroup>
      <ListGroupItem>List item 1</ListGroupItem>
      <ListGroupItem>List item 2</ListGroupItem>
      <ListGroupItem>List item 3</ListGroupItem>
      <ListGroupItem>List item 4</ListGroupItem>
    </ListGroup>

    <h2 className="text"><span>2. Group list with active and disabled elements:</span></h2>
    <ListGroup>
      <ListGroupItem active>List item 1</ListGroupItem>
      <ListGroupItem>List item 2</ListGroupItem>
      <ListGroupItem disabled>List item 3</ListGroupItem>
      <ListGroupItem>List item 4</ListGroupItem>
    </ListGroup>

    <h2 className="text"><span>3. Group list with custom components:</span></h2>
    <ListGroup>
      <ListGroupItem>
        List item 1
        <Badge value={2} inline />
      </ListGroupItem>
      <ListGroupItem>
        List item 2
        <Badge value="new" inline />
      </ListGroupItem>
      <ListGroupItem>
        List item 3
        <Badge value={10} warning inline />
      </ListGroupItem>
      <ListGroupItem>
        List item 4
        <Button>Update</Button>
      </ListGroupItem>
    </ListGroup>

    <h2 className="text"><span>4. Group list links:</span></h2>
    <ListGroup>
      <ListGroupItem href="/" active>List item 1</ListGroupItem>
      <ListGroupItem href="/">List item 2</ListGroupItem>
      <ListGroupItem href="/">List item 3</ListGroupItem>
      <ListGroupItem href="/">List item 4</ListGroupItem>
    </ListGroup>

  </>
);

export default Sandbox;