import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllCatsPage from './pages/AllCatsPage/AllCatsPage';
import LikedCatsPage from './pages/LikedCatsPage/LikedCatsPage';
import { store } from './store/store';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Route
            path="/all-cats"
            Component={AllCatsPage}
          />
          <Route
            path="/liked-cats"
            Component={LikedCatsPage}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
