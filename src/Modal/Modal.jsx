import Close from "./assetss/delete30.png" ;
import "./modal.css"

const Modal = ({ show, close }) => {
    return (<> {show ?
        <div className="modalContainer" onClick={() => close()} >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <header className="modal_header">
                    <h2 className="modal_header-title">Añade tu comentario</h2>
                <input className ="comentario"type="text" placeholder="Escribe tu comentario aquí" />
                    <button className="close" onClick={() => close()}>
                        <img src={Close} alt="close" /> </button>
                </header>
                
                    <button className="modal-close" onClick={() => close()}> Cancel </button>
                    <button className="submit">Submit</button>
                
            </div>
        </div>
        : null} </>);
};

export default Modal;