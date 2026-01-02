# nm-React

-In the end JSX convert to React.createElement and createElement convert to Javascript Object and js object then Html

- JSX => React.createElement=> ReactElement (Js object)=> HtmlElement(render)
- Example

  ```javascript
  // This is jsx code
  const JSX = <h1 className="heading">Hello from JSX code</h1>

  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(JSX)

  // This is converted to React.createElement
  const JSX = React.createElement("h1",{class:"heading"},"Hello from JSX code")

  // This is Now converted to JavaScript Object, this is called React element
  const JSX = {
  type: "h1",
  key: null,
  ref: null,
  props: {
  class: "heading",
  children: "Hello from JSX code"
  },
  \_owner: null,
  \_store: {}
  };
  ```

- React Component are two types of Component

  1.  Class Based Component - OLD
  2.  Functional Component - NEW

  - Class Based component is OLD way
  - Functional component is NEW way
    -Example
    ```javascript
    // functional component always write with first Capital letter
    const HeadingComponent = () => {
      return <h1>nm react from Functional component</h1>;
    };
    // it's a javaScript arrow function that return a pcs of code
    // A function that return a some pcs of JSX its a functional component
    ```
  - These two things are same
    ```javascript
    // One
    const HeadingComponent = () => {
      return <h1>nm react from Functional component</h1>;
    };
    // Two
    const HeadingComponent = () => <h1>nm react from Functional component</h1>;
    ```
  - This is a React Element
    ```javascript
    const JSX = <h1 className="heading">Hello from JSX code</h1>;
    ```
  - This is a React Functional Components
    ```jsx
    const HeadingComponent = () => {
      <div id="container">
        <h1 className="heading">Hello from JSX code</h1>
      </div>;
    };
    ```
  - React Functional component is render like this
    ```jsx
    root.render(<HeadingComponet />);
    ```
  - React Element is render like this
    ```jsx
    root.render(JSX);
    ```
  - if we composition 2 components in once in another it's call **_Component Composition_**
  - Example

  ```jsx
  // This is functional component 'List' that we use in another component
  const List = () => {
    return (
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
      </ul>
    );
  };

  const HeadingComponents = () => {
    return (
      <div id="container">
        <h1 className="heading">nm React functional Component</h1>
        // We used List component in HeadingComponents so it's called Component Composition
        <List />
      </div>
    );
  };
  ```

  - React Element using in functional component
  - Example

  ```jsx
  return (
    <div id="container">
      // in {} curly brackets you can run any pcs of javaScript code or React
      Element // in This example i used a number variable to show on my webPage
      {number}
      <h1 className="heading">nm React functional Component</h1>
      <List />
    </div>
  );
  ```

  - I can use React Element in another React Element. In the end of the day React element is a like javaScript Variable
  - Example

  ```jsx
  // I created a element Variable to inject in another React Element
  const element = <li>React Js</li>;

  const ulList = (
    <ul>
      <li>Html</li>
      <li>Css</li>
      <li>JavaScript</li>
      // In here i Injected the Variable inside another variable
      {element}
    </ul>
  );
  // In here we can render ulList React elment like this, means directly not inside {ulList} or not like <ulList />
  // if we use like {ulList} this then it will return object not treate like jsx so it would't render.
  const List = () => ulList;
  // if we want to {ulList} like this then we direct put to jsx code first
  // Example
  const List = () => {
    return <div>{ulList}</div>;
  };
  ```

  - These types to i can exicute my code

  ```jsx
  const HeadingComponents = () => {
    return (
      <div id="container">
        {number}
        <h1 className="heading">nm React functional Component</h1>
        // first like a normal javascript function. in the end of the day it's a
        // normal javaScript function
        {List()}
        // second like function component
        <List />
        // third like a html tag, these three ways are same
        <List></List>
      </div>
    );
  };
  ```
## 
- We Created a Website memo that we will create as a project.
    - /**
     * Header
     *  - logo
     *  - nav items
     * Body
     *  - search
     *  - ReasturentContainer
     *     - ReasturentCart
     * Footer
     *  - copyright
     *  - links
     *  - Adress
     *  - contact
     */
