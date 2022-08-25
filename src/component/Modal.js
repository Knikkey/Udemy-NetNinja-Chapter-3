import { createPortal } from "react-dom";

import "./Modal.css";

export default function Modal(props) {
  return createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: props.isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {props.children}
        <button
          onClick={props.onShowModal}
          className={props.isSalesModal ? "sales-btn" : ""}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

//Destructuring
// export default function Modal({children}) {
//   return (
//     <div className="modal-backdrop">
//       <div className="modal">{children}</div>
//     </div>
//   );
// }
