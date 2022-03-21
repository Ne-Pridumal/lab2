import Navbar from "./components/Navbar";
import { createContext, useEffect, useState } from "react";
import Modal from "./components/Modal";
import RightClickMenu from 'react-right-click-context-menu'

export const ModalContext = createContext({
  modalDisplay: false,
  setModalDisplay: (value: boolean) => { }
});

const App = () => {
  const [modalDisplay, setModalDisplay] = useState(false)
  return (
    <ModalContext.Provider value={{
      modalDisplay,
      setModalDisplay
    }}>
      <header>
        <div className="nav-area">
          <img style={{ maxHeight: 50 }} src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Computer_crash.svg' />
          <Navbar />
        </div>
      </header>
      {modalDisplay ? <Modal /> : null}
    </ModalContext.Provider >
  );
};

export default App;