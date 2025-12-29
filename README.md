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
