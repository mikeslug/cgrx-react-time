const Modal = ({ handleClose, form, children }) => {
  const showHideClassName = form ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <a className="closeModal" type="button" onClick={handleClose}></a>
      </section>
    </div>
  );
};

export default Modal;
