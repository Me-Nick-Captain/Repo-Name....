//                                                                   Day 2

/*import ClassBased from "./components/ClassBased";
import FunctionBased from "./components/FunctionBased";
function App(){
    return(
        <>
            <ClassBased/>
            <FunctionBased/>
        </>
    )
}
export default App;
*/

import React from 'react'
import ClassBased from "./components/ClassBased";
import FunctionBased from "./components/FunctionBased"

const AppParentComponent = () => {
  return (
    <>
        <ClassBased/>
        <FunctionBased/>
    </>
  )
}

export default AppParentComponent

//                                                                         Day 2