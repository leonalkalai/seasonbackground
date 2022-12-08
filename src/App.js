import './App.css';
import Main from './components/Main';
import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '9df4bf0a842e8e95611241998929c20b',
};

const App = ()=> {
    return(
  <div>
      <Main />
  </div>
  
  )};
  
  export default App;