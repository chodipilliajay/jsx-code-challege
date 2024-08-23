//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom"

ReactDOM.render(<div><h1>Ajay is my Hero</h1>
<ul><li>Super hero</li>
<li>Iron Man</li>
<li>Bat man</li></ul></div>, document.getElementById("root"))

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
