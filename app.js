/* 
createElement=> create an react emlent objt
root.render=>it is responsible to take the obj and convert it into h1 tag.

const heading = React.createElement(// heading:"it is a react element an object,  react elemet is normla js objeact, props are childers " , 
  "h1",
  { id: "heading", xyz: "abc" },//props  this are the childer goes inside the h1 tag
  "hlo world from react"//props
);// object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);//  it is responsible to take the obj and convert it into h1 tag.

how to creat nested structure

<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2> i am h2 tag</h2> second child
    </div>
</div>
*/
 // to much nested become untidy, jsx help in that  it make easy to write  below is basic react
const parent=React.createElement(// nested html structure in react by third argument 
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},//convet below in arry for sibling
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
    ),React.createElement(
        "div",
        {id:"child2"},//convet below in arry for sibling
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);//  it is responsible to take the obj and convert it into h1 tag.
