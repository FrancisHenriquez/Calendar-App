import { useState } from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')

export const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState(true)


  const onCloseModal = ( ) => {
    console.log('cerrando modal');
    setIsOpen( false );
  }


  return (
    <Modal isOpen={isOpen }
          // onAfterOpen={afterOpenModal}
          onRequestClose={ onCloseModal }
          style={ customStyles }
          className="modal"
          overlayClassName="modal-fondo"
          closeTimeoutMS={ 200}>

            <h1>LordConfle </h1>
            <hr />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam deserunt assumenda obcaecati maiores unde.
               Id obcaecati iure aspernatur, aut fuga laborum incidunt alias doloremque impedit repellat nesciunt ea maxime?</p>
      


    </Modal>
  )
}
