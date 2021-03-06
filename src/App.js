import logo from "./logo.svg";
import "./App.css";

// import components here
import FirstComponent from "./components/FirstComponent";
import NoJSX from "./components/NoJSX";
import PropsComponents from "./components/propsComponents";
import StateComponent from "./components/stateComponent";
import SetStateUnderstand from "./components/setStateUnderstand";
import EventHandlers from "./components/EventHandlers";
import BindingEventHandlers from "./components/BindingEventHandlers"
import MethodsAsPropsParent from './components/MethodsAsPropsParent'
import CondtionalRendering from './components/CondtionalRendering'
import ListRendering from './components/ListRendering'

function App() {
  return (
    <div className="App">
      {/* first component */}
      {/* <FirstComponent /> */}
      {/* <NoJSX /> */}
      {/* <PropsComponents name="Max" alias="Max1712345" />
      <PropsComponents name="Danny" alias="DanTheMan">
        This is children props of Danny of type InnerText
      </PropsComponents> */}
      {/* <StateComponent /> */}
      {/* <SetStateUnderstand /> */}
      {/* <EventHandlers /> */}
      {/* <BindingEventHandlers /> */}
      {/* <MethodsAsPropsParent/> */}
      {/* <CondtionalRendering /> */}
      <ListRendering />
    </div>
  );
}

export default App;
