import React from 'react';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';

import Image from '../image/Image';
import ButtonGroup from '../button-group/ButtonGroup';
import Button from '../button/Button';

const Sandbox = () => (
  <>

    <h2 className="text"><span>1. Horizontal Tabbar:</span></h2>
    <TabBar>
      <TabBarItem label="Simple text">
        <p>
          I like movies very much, especially fantasy. My favorite movie is Harry Potter and the Philosopher’s Stone. The movie came out in 2001, but it is still very good. Of course, I have seen all the Harry Potter movies, but the first one is special for me.

The movie is set in modern England and in a fictional place called Hogwarts. The story is a mixture of real-life drama and fantasy. The main character of the movie is a ten-year-old orphan Harry. His parents died when he was a baby, and now he lives with his foster parents and his stepbrother who do not like him. Although Harry has a family, he is a very lonely boy.
        </p>
      </TabBarItem>
      <TabBarItem label="Image">
        <Image
          src='assets/harry.jpg'
          width={150}
          height={150}
        />
      </TabBarItem>
      <TabBarItem label="Component">
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </TabBarItem>
      <TabBarItem label="Just empty tab" />
    </TabBar>

    <h2 className="text"><span>2. Vertical Tabbar:</span></h2>
    <TabBar vertical>
      <TabBarItem label="Simple text">
        <p>
        I like movies very much, especially fantasy. My favorite movie is Harry Potter and the Philosopher’s Stone. The movie came out in 2001, but it is still very good. Of course, I have seen all the Harry Potter movies, but the first one is special for me.

The movie is set in modern England and in a fictional place called Hogwarts. The story is a mixture of real-life drama and fantasy. The main character of the movie is a ten-year-old orphan Harry. His parents died when he was a baby, and now he lives with his foster parents and his stepbrother who do not like him. Although Harry has a family, he is a very lonely boy.
        </p>
      </TabBarItem>
      <TabBarItem label="Image">
        <Image
          src='assets/harry.jpg'
          width={150}
          height={150}
        />
      </TabBarItem>
      <TabBarItem label="Component">
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </TabBarItem>
    </TabBar>

  </>
);

export default Sandbox;