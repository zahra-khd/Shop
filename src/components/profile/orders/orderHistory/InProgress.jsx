import { useState } from "react";

// images
import imgCurrentOrder from "../../../../assets/images/imgCurrentOrder.png";
import { Modal } from "../../../Modal";


export const InProgress = () => {
  const [showModal, setShowModal] = useState(false);

  // نمایش صفحه modal
  function showModalOrder() {
    setShowModal(true);
  }

  // بستن صفحه modal
  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="m-auto">
      <img
        src={imgCurrentOrder}
        alt="imgCurrentOrder"
        onClick={showModalOrder}
      />
      <p className="pe-3">هنوز هیچ سفارشی ندادید</p>

      <Modal  showModal={showModal}>
      <button
                type="button"
                className="close position-absolute top-0 start-100 translate-middle border border-secondary rounded-circle bg-white"
                onClick={closeModal}
              >
              </button>
              <div className="modal-header border-0 justify-content-center fw-bold ps-5">
                <p className="modal-title me-5">
                  <span>سوپرایز! 70000 تومان تخفیف تا امشب </span>
                  <i className="bi bi-7-square-fill"></i>
                </p>
              </div>
              <div className="modal-body d-flex justify-content-center">
                <p>کف سفارش 400 هزار تومان</p>
                <i className="bi bi-cart-check-fill"></i>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button className="inProgress-btn-copy w-50 d-flex justify-content-between p-1">
                  <p className="m-0">PYSE</p>
                  <i className="bi bi-copy p-0"></i>
                </button>
              </div>
      </Modal>
    </div>
  );
};
