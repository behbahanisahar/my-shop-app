import React, { ReactElement, useState } from 'react';
interface Products {
    title: string; price: string; description: string; category: string; image: string
}

const Product = (product: any): ReactElement => {


    return (
        <>
            <div className="flex bg-white w-full mb-5 shadow-sm rounded-lg">
                <div className="w-5/12 p-2">
                    <div style={{ backgroundImage: `url(${product.product.image})` }} className="bg-contain bg-no-repeat bg-center w-full h-full"></div>
                </div>
                <div className="w-7/12 p-5">
                    <h1 className="md:text-2xl">{product.product.title.substr(0, 50)}</h1>
                    <h3 className="text-gray-400">{product.product.category}</h3>
                    <p className="text-red-400 mt-4 text-xl md:text-4xl">{product.product.price}$</p>
                    <div className='mt-4'>{product.product.description.substr(0, 100)}</div>
                </div>
            </div>

        </>
    );

}


export default Product;