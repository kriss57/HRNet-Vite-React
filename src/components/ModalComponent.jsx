import { useState } from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";
import Modal from "my-modal-test";
import { useNavigate } from "react-router-dom";

const ModalComponent = ({ onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFirstBtnClick = () => {
    // Provide the logic you want to perform here
    // for example, an alert box to indicate successful Exit
    alert("Exit!");
    // and closed modal
    setShowModal(false);
  };

  const handleSecondBtnClick = () => {
    // Provide the validation logic you want to perform here
    // for example, an alert box to indicate successful validation
    // alert("Validation successful!");
    onSave();
    navigate("/employee-list");
  };

  return (
    <>
      <button className="btModal" onClick={() => setShowModal(true)}>
        Save
      </button>

      {showModal &&
        createPortal(
          <Modal
            closeModal={() => setShowModal(false)} // Callback function to close the modal
            theme="validation" // Theme of the modal ('validation', 'success', 'success-dark', 'alert', 'error')
            //title="Title" // Title of the modal // Optional ! //
            textContent="Employee created!" // Text content of the modal
            modalSize="modal-medium" // Size of the modal ('modal-large' in this case)
            miniBtnActive={true} // Flag indicating whether the mini button is active // true or false
            FirstBtnActive={{
              text: "Close", // Text for the first button
              onFirstBtnClick: handleFirstBtnClick, // Callback function when the first button is clicked
            }}
            DoubleBtnActive={{
              text: "Next", // Text for the second button
              onSecondBtnClick: handleSecondBtnClick, // Callback function when the second button is clicked
            }}
          />,
          document.body
        )}
    </>
  );
};

ModalComponent.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ModalComponent;
