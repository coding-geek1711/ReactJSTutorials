# This is a Comprehensive course on React by Code Evolution

## Lesson 1

```
npx create-react-app <projecname>
cd <projectname>
npm start
```

- Folder Structure is as follows

  - Project Parent Folder
    - node modules
    - public
    - src
    - package.json

- package.json ==> dependencies and scripts
- node modules ==> dependencies installed here
- public folder

  - index.html
  - favicon.ico ==> react logo

  ### NOTE: index.html is the only html file in the entire application

  - view might dynamically change in browser but only one html page served

- src folder ==> contains all react code
  - index.js ==> specify root component (App) and Dom component (root Dom node in index.html)
  - App.js ==> represents view seen in the browser
  - css files for styling

# Lesson 2: Components

- In React, component represents part of UI. Generally, and App has 5 components

  - Header
  - Sidenav
  - Main Content
  - Footer

  and all of these are parts of the root component (App component)

- React has 2 types of components,

  - Stateless Functional Components
  - Stateful Class Components

  - Stateless Functional Components:
    Javascript Functions
    ```js
    function Welcome() {
      return <h1>Hello Maheswaran</h1>;
    }
    ```
  - Stateful Class Components:
    ES6 Classes
    Must have render method
    ```js
    class Welcome extends React.Component {
      render() {
        return <h1>Hello Maheswaran</h1>;
      }
    }
    ```

- Lets see App component in detail
  - App.js is a class component and extends from Component in React
  - contains render method and returns some HTML
  - can have n number of components (FB ==> around 30K )

# Lesson 3: Functional and Class Components

## FUNCTIONAL COMPONENTS:

- Javascript function
- Accepts property object and returns jsx (like HTML but not quite)

- Lets create a functional component in React

- Create a components folder, and create a js file named the component, here FirstComponent.js

- Generally functional components are arrow functions, import react from 'react' and export default <component name>

### NOTE: During exporting components, if default is used, it can be imported in App.js with any name else U have to import it with the same name as it was exported

## CLASS COMPONENTS

- Javascript ES6 Classes
- Accepts props as input and returns html
- Can maintain a private internal state
  Lets create same FirstComponent as a class component

## COMPARE BOTH

- Functional Components:

  - simple functions
  - Use as much as possible
  - No 'this' keyword
  - Solution without using state **_EDIT_**
  - Mainly responsible for UI

- Class Components:
  - Feature rich
  - Maintain private data ==> state
  - Complex UI Logic
  - Lifecycle Hooks **_EDIT_**

# NOTE:

- React Hooks lets u use a state and other features without writing a class
- Using state in class components and lifecycle hooks in class components and being mad about "this" keyword will help to appreciate React hooks better

# Lesson 4: JSX

- Javascript XML - Extension to Javascript Language syntax
- Write XML-like code for elements and components
- Have tag names, attributes and children
- Syntactical Sugar

Lets see how to make any component without JSX, create a new file NoJSX.js in components

In NoJSX, we can do this

```js
return React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello Maheswaran")
);

// React.createElement(tag name, properties for that tag, children of that tag)

// attributes passed like this
// class keyword cant be used, className has to be used

return React.createElement(
  "div",
  { id: "HELLO", className: "DummyClass" },
  React.createELement("h1", null, "Hello Maheswaran")
);
```

- JSX DIFFERENCES
  - class ==> className
  - for ==> htmlFor
  - camelCase property naming convention
    - onclick ==> onClick etc

# Lesson 5: Props

- Props or Properties are optional input which ur components can accept
- Props are specified as attributes

- Functional components

  ```js
  // IN APP.JS
  <PropsComponents name="<NAME TO BE SENT HERE>" />;

  // IN PropsComponents.js

  /*
  props is an object with an attribute of name having value "WHATEVER NAME IS MENTIONED"
  */

  const PropsComponents = (props) => <h1>Hello {props.name}</h1>;
  ```

  - Now what if we want to extract the information in children props ie the information between the custom HTMLTAGS

  ```html
  <CUSTOM TAG NAME>CHILDREN PROPS</CUSTOM TAG NAME>
  ```

### NOTE: Irrespective of component type, props are declared as attributes to custom html tags during invocation in app.js

- Class Components Props
  get values through {this.props}

## NOTE: PROPS ARE IMMUTABLE

# Lesson 6 A: State

- Props vs State

- Props

  - props are passed to the components (Analogy ==> Function parameters)
  - props are immutable as they are passed on by a parent ie child cant change them
  - functional components ==> props.<attributename>
    class components ==> this.props.<attributename>

- State

  - state is managed within component (Analogy ==> Variables declared in function body)
  - state can be changed as they are managed within component
  - functional components ==> useState Hook
    class components ==> this.state

- How to use state in class components?
  the this.state is set in the constructor of the class component

```js
class ClassName extends Component {
  constructor() {
    super();
    this.state = { message: "Hello Visitor" };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button>Click Me!!!!</button>
      </div>
    );
  }
}
```

- On Button element we add onClick attribute, and we assign a event handler to the onClick attribute in parantheses like as follows

```html
<button onClick = {() => this.changeMessage()}>Click Me!!!</button>
```

and we have to define the changeMessage method in the component class we are in

it will be as follows

```js
class ClassName extends Component {
  constructor() {
    super();
    this.state = { message: "Hello Visitor" };
  }
  changeMessage = () => {
    this.setState({
      message: "BUtton Clicked",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me!!!!</button>
      </div>
    );
  }
}
```

- this.setState is a predefined method used to change the state
- Hence state is an object that is privately maintained inside a class component. A state can influence what is rendered inside a browser. State can be changed within a component

# Lesson 6 B : setState

- Create a setStateUnderstand component and use `rce` for snippets of class components, import in App.js
- Inside class Counter, use `rconst` for snippets of state, from where constructor and this.state are typed out automatically.
- Set initial state of a property named count to 0

```js
this.state = { count: 0 };
```

- Render using curly braces in the render method

```js
render(){
  return <div>Count ==> {this.state.count}</div>
}
```

- Now, create a button for increment and define the method for incrementing it in the class. Lets see what happens when we dont use the setState method and instead do this

```js
increment = () => {
  console.log(this.state.count);
  this.state.count = this.state.count + 1;
};
```

- What happens is even though state is incremented and logged onto the console, nothing changes in the html page...ie the changes are not rendered.This is because UI doesnt re-render whenever state changes and this is the MOST IMPORTANT REASON why u sould NEVER CHANGE STATE directly. Always use setState to CHANGE state

- Always do this as follows

```js
increment = () => {
  console.log(this.state.count);
  this.setState({
    count: this.state.count + 1,
  });
};
```

### NOTE: In the console of the above function, we can observer 0 to be logged whereas in the count variable, 1 is rendered. This pattern keeps true when method called multiple times too..ie 1 in console and 2 rendered, 2 in console and 3 rendered and so on...This is because function calls to setState are asyncronous.

- Means console.log() is being called before setState has been set (async function). Many a times, u might want a certain piece of code to be executed only after setState has been completed. To handle that, pass in a callback function as a second parameter to the setState method

```js
increment = () => {
  this.setState(
    {
      count: this.state.count + 1,
    },
    () => console.log(this.state.count) // callback to setState
  );
};
```

- Whenever u need to execute some code only after some state value has been changed, always put it in as a callback function to setState

### LETS COMPILCATE THIS A BIT

Lets say i create a new method incrementFive where i just call increment five times

```js
incrementFive = () => {
  this.increment();
  this.increment();
  this.increment();
  this.increment();
  this.increment();
};
```

- Strangely, count increases to 1 and in the console, 0 is logged 5 times and 1 is also logged 5 times. Why ?

- This is because React Groups multiple setState calls into a single update for better performance. What happens here is all 5 setState calls are done in one go and updated value doesnt carry over between different calls.

- So, to prevent this, whenever u have to update the state based on the previous state, u pass a function as an argument in the setState method instead of an object

```js
this.setState((prevState) => (
  {
    count: prevState.count + 1;
  }
}));
```

- Therefore, when u have to update current state based on previous state, make sure to pass in a function as an argument instead of object

### SUMMARY:

- Always use setState and never modify state directly
- Code has to be executed after state has been updated ? PLace that code in the callback function of setState method as second argument
- When u have to update state based on previous state value, pass in function as an argument instead of regular object with one argument being the previous state

# Lesson 7: Event Handlers
