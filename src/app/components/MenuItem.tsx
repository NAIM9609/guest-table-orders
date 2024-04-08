import React from "react";

const MenuItem = () => {
    const OpenModal = () => document.getElementById("my_modal_2").showModal();
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
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
