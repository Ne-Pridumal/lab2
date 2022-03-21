/* eslint-disable jsx-a11y/img-redundant-alt */
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";
import Modal from "./components/Modal";

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
          <img style={{ maxHeight: 50 }}
            src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Computer_crash.svg'
            alt="image" />
          <Navbar />
        </div>
      </header>
      {modalDisplay ? <Modal /> : null}
    </ModalContext.Provider >
  );
};

export default App;