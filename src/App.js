import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { AppContext } from './context';


function App() {
  const [total, setTotal] = useState(10);
  const [item, setItem] = useState(20);
  return (
    <div className="App">
      <AppContext.Provider value={{total, setTotal, item, setItem}}>
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </AppContext.Provider>
    </div>
  );
}
export default App;
