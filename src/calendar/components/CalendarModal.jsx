
import { addHours } from "date-fns/esm";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import DatePicker from "react-datepicker";



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

  const [isOpen, setIsOpen] = useState(true);

  const [formValues, setFormValues] = useState({
    title: 'Francis',
    notes: 'LordConfle',
    start: new Date(),
    end: addHours (new Date(), 4)
  })

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChanged = ( event, changing ) => {
    setFormValues({
        ...formValues,
        [changing]: event
    })
}

  const onCloseModal = ( ) => {
    console.log('cerrando modal');
    setIsOpen( false );
  }


  return (
    <Modal isOpen={ isOpen }
         
          onRequestClose={ onCloseModal }
          style={ customStyles }
          // className = "modal" fucks the modal up, idk why 
          // overlayClassName="modal-fondo"
                             >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                           selected={ formValues.start}
                           onChange={ (event) => onDateChanged(event, 'start') }
                           className="form-control"
                           dateFormat="Pp" />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                           selected={ formValues.end}
                           onChange={ (event) => onDateChanged(event, 'end') }
                           className="form-control"
                           dateFormat="Pp" />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ formValues.title }
                        onChange= { onInputChanged }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ formValues.notes }
                        onChange= { onInputChanged }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>



    </Modal>
  )
}
