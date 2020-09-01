import React from 'react';

const Flexbox = props => {
  return (
    <div className='flex flex-wrap justify-center'>
      {props.children}
    </div>
  );
}

export default Flexbox;