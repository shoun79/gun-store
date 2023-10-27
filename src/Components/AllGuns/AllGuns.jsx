import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const AllGuns = ({ hendleAddToCart }) => {


    const [guns, setGuns] = useState([]);
    const gunsData = async () => {
        const res = await fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json');
        const data = await res.json();
        setGuns(data);

    }
    useEffect(() => {
        gunsData()

    }, []);

    return (
        <div>
            <div className='text-center mt-8 '>
                <h1 className='text-4xl font-bold mb-4'>Welcome to Guns Store</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis enim dignissimos, quam possimus tenetur maxime repellendus molestiae incidunt fuga debitis qui minima unde doloremque iure atque harum amet vel!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-[90%] mx-auto'>
                {
                    guns.map(gun => <Gun
                        key={gun.id}
                        gun={gun}
                        hendleAddToCart={hendleAddToCart}

                    ></Gun>)
                }
            </div>
        </div>
    );
};

export default AllGuns;