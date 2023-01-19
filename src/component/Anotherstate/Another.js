import React, { useState } from 'react';

const Another = () => {
    const [products, setProducts]= useState([
        {id:1, title: 'black sanakers', quantity:1},
        {id:2, title: 'red t-shirt', quantity:1},
        {id:3, title: 'blue jeans', quantity:1},
    ])

    const [selectProduct, setSeleteProduct]=useState([])


    const incresment =id=>{
        setProducts((prev)=>{
            return prev.map((product)=>{
                if(product.id === id){
                    return {...product,quantity:product.quantity}
                }else return product
            });
        });
    };

    const handleChoose = id=>{
        const product = products.find(p=> p.id === id)
        setSeleteProduct(product)
    }
    return (
        <div>
            <h4>
                All Product Here
            </h4>
            {products.map(product=>(
                <div key={product.id}>
                    <span>
                        {product.title}
                        <button onClick={()=>handleChoose(product)}></button>
                    </span>
                    <div className="quantity">
                        <button>...
                        </button>
                        <span>{product.quantity}</span>
                        <button onClick={()=> incresment(product.id)}></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Another;