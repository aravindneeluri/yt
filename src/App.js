import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import store from './utils/store';

function App() {
  return (
    <Provider store = {store}>
    <div>
      <Header />
      <Body />
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
