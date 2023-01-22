import React from 'react';
import Image from './Image';

const Sandbox = () => (
  <>

    <h2 className="text"><span>1. Base image placeholder:</span></h2>
    <Image />

    <h2 className="text"><span>2. Image with src and alt attribute:</span></h2>
    <Image
      src="https://yt3.ggpht.com/a-/AN66SAxaodVdRdyJ3YuM24rQ07_py_oWfFdEvVBp=s100-mo-c-c0xffffffff-rj-k-no"
      alt="youtube"
    />

    <h2 className="text"><span>3. Image placeholder with 50x50, 100x100 and 150x150 sizes:</span></h2>
    <Image width={50} height={50} style={{ marginRight: '20px' }} />
    <Image width={100} height={100} style={{ marginRight: '20px' }} />
    <Image width={150} height={150} />

    <h2 className="text"><span>4. Circle image with 150x150 size:</span></h2>
    <Image
      src='assets/harry.jpg'
      width={150}
      height={150}
      circle
    />

  </>
);

export default Sandbox;