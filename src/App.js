import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <CakeContainer />
      <ClassCounter />
    </div>
    </Provider>
  );
}

export default App;
