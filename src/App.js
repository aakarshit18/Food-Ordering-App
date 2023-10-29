import React, {useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import ContextProvider from './store/ContextProvider';

function App() {
  const [cartActive, setCartActive] = useState(false);

  function showCartHandeler(){
    setCartActive(true);
  }
  function hideCartHandeler(){
    setCartActive(false);
  }

  return (
    <ContextProvider>
      {cartActive && <Cart onHide={hideCartHandeler}/>}
      <Header onShow={showCartHandeler} />
      <Meals />
    </ContextProvider>

  );

}

export default App;
