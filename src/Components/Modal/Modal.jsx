import React from 'react';

const Modal = ({ modalData, setModalData }) => {

    console.log(modalData)
    const { name, img, price, capacity } = modalData;
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <img className=' h-52' src={img} alt="" />
                    <p className='mt-3'>Price:$ {price}</p>
                    <p className="py-4">Capacity: {capacity}</p>
                    <div className="modal-action">
                        <label onClick={() => setModalData(null)} htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;