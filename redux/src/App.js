import logo from './logo.svg';
import './App.css';
// importing the ListTask
import ListTask from './components/ListTask';
// Provider components connection our react application to our redux store
import { Provider } from 'react-redux';
// the store from redux store
import store from './Jsx/Store';

function App() {
  return (
    // THE Provider allows our application to access the store
    <Provider store={store}>
        <ListTask/>
    </Provider>
    
  );
}

export default App;
