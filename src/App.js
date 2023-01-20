import './App.css';
import { Fragment } from 'react';
import MainPage from './Pages/MainPage';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';

function App() {
  return (
    <Fragment>
      <HomeTemplate Component={MainPage} />
    </Fragment>
  );
}

export default App;
