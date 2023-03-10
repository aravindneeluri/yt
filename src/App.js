import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
// import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import store from './utils/store';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: '/watch',
      element: <WatchPage />
    }
  ]
}]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
