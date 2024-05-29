export const Modal = ({ children, showModal }) => {
  return (
    <>
      {showModal && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
