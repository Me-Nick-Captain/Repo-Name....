import React from 'react'

const PropsAsString = (myProps) => {
    console.log(myProps);
  return (
    <div>PropsAsString:{myProps.str}    {myProps.str1}</div>
  )
}

export default PropsAsString