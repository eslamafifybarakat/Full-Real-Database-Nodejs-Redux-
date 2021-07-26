import {Provider} from 'react-redux';
import store from './store'
import AppRouter from './app-router';
import { Link } from 'react-router-dom'
const App = ()=>{
    return (
      <>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </>
    );
}
export default App