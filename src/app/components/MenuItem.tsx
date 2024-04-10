import React from "react";

export interface ChildComponentProps {
  title: string;
}

const MenuItem : React.FC<ChildComponentProps> = ({ title }) => {
  
    const OpenModal = () =>
      {
        if(document) {
          const modalAddToCart = document.getElementById("my_modal_2");

          if(modalAddToCart instanceof HTMLDialogElement)
            modalAddToCart.showModal();
        }
      };

  return (
    <>
      <div className="card card-bordered w-96 shadow-primary-content shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={OpenModal}
            >
              Aggiungi all`ordine
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
