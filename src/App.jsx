const Title = () => {
  return <h1>Namaste react using jsx</h1>;
};

const element = <li>React Js</li>;

const ulList = (
  <ul>
    <li>Html</li>
    <li>Css</li>
    <li>JavaScript</li>
    {element}
  </ul>
);

const List = () => ulList;

let number = 3301;

const HeadingComponents = () => {
  return (
    <div id="container">
      {number}
      <h1 className="heading">nm React functional Component</h1>
      {List()}
      <List />
      <List></List>
    </div>
  );
};

export { Title, HeadingComponents };
