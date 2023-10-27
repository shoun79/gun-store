import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Gun = (props) => {
    const [modalData, setModalData] = useState({});
    const { name, img, bullet, action } = props.gun;
    const { gun, hendleAddToCart } = props;

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-action">

                        <div className="badge badge-outline mr-3">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>

                        <div className='mt-4'>
                            <button onClick={() => hendleAddToCart()} className="btn btn-sm btn-primary mr-3">Add to cart</button>

                            {/* The button to open modal */}
                            <label onClick={() => setModalData(gun)} htmlFor="my_modal_6" className="btn btn-sm btn-success">Detaills</label>
                        </div>

                    </div>
                </div>
            </div>


            {/* Modal*/}
            {
                modalData && <Modal modalData={modalData} setModalData={setModalData}></Modal>
            }
        </div>
    );
};

export default Gun;