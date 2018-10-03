import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from '../store';
import Layout from "./layout";


// ReactDOM.render(
// <Provider store={store}>
//   <Layout />
// </Provider>,
//   document.getElementById("root")
// );
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home';
import Login from './login';

// const login = () => {
//   return (
//     <Provider store={store} >
//       <Login />
//     </Provider>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <div>

        {/* home */}
        <Route exact path="/" component={() => (
          <Provider store={store} >
            <Home />
          </Provider>
        )} />


        {/* login  */}
        <Route path="/login" component={() => (
          <Provider store={store} >
            <Login />
          </Provider>
        )} />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));