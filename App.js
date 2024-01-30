const heading = React.createElement(
  "h1",
  { id: "heading", style: { color: "red" } },
  "Hello world from React!"
);

//Nasted Element
const nestedHeading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I'm H1 tag!!"),
    React.createElement("h2", { id: "heading2" }, "I'm H2 tag!!"),
  ])
);

console.log(heading, "heading"); //just an Object

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(nestedHeading);
