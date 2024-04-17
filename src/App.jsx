
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Home from './Home';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <Home/>,
      },

    ]
  },
]);

function App() {
  return (
      <Provider store={store}>
          <Outlet />
      </Provider>
  );
}

export default App;