import React from 'react'

const PropsAsUndefined = (myProps) => {
    console.log(myProps);
  return (
    <div>PropsAsUndefined: {myProps.undef}</div>
  )
}

export default PropsAsUndefined