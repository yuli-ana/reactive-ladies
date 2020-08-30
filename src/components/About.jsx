import React from "react";
// import FakeDragDrop from './FakeDragDrop';
// import ContextMenuTest from './ContextMenuTest';
// import SanfonaTest from './SanfonaTest';
import RealDragDrop from './RealDragDrop'

function About() {
    return (
        <>
            <h1>About</h1>
            <RealDragDrop />
            {/* <SanfonaTest /> */}
        </> 
    )
}

export default About;