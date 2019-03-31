import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'
import { Route , Switch } from 'react-router-dom'
// import Breakpoint, { BreakpointProvider } from 'react-socks'

import MainContainer from './MainContainer'

const My404 = () => {
  return(
    <div>
    don't worry! you can do it!
    </div>
  )
}

const App = () => {
  return(
      <main>
        <Switch>
          <Route exact path='/' component = { MainContainer } />
        </Switch>
      </main>
  )
}

export default App;


// const My404 = () => {
//   return(
//     <div>
//     don't worry! you can do it!
//     </div>
//   )
// }
//
// const App = () => {
//   return(
//     <BreakpointProvider>
//       <main>
//         <Switch>
//           <Route exact path='/' component = { MainContainer } />
//         </Switch>
//       </main>
//     </BreakpointProvider>
//   )
// }
//
// export default App;




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
