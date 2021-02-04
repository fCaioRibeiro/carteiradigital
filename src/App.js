import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/config.css';

import Routes from './modules/routes/Routes.js';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#E4E4E4"}}>
      <Routes />
    </div>
  );
}

export default App;
