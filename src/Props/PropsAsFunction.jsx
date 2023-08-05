import React from 'react'

const PropsAsFunction = (myProps) => {
    console.log(myProps);
    let { myfun, myfun1 } = myProps;
    return (
      <div>
        PropsAsAfun: {myfun()}
        <p>
          <myfun />
        </p>
        <p>
          <myfun1 />
        </p>
      </div>
    );
  };

export default PropsAsFunction