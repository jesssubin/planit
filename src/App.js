import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//to display the list of users in APP
// const App = () => {
//     const {
//         state,
//         dispatch
//     } = useApplicationData();
//       const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
//   ));
//   return (<div className="App" >
//     <h1> Users </h1>

//     <ul> {userList} </ul>
//   </div >
//   );
// };


export default App;
