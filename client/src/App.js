import { Outlet } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar.jsx';

function App() {
   return (
      <div className="App">
         <div className="container">
            <NavBar/>
            <Outlet/>
         </div>
      </div>
   );
}

export default App;
