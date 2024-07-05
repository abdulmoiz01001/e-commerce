import React, { useState, useEffect } from 'react'

const CartComp = () => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    setIds(cart);
  }, [])

  const fetchCart = async () => {
    if (!Array.isArray(ids)) {
      console.error('ids is not an array:', ids);
      return;
    }

    let tempArr = [];
    for (const id of ids) {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      tempArr.push({ ...data, amount: 1 });
    }
    setCart(tempArr);
  }

  useEffect(() => {
    fetchCart();
  }, [ids])

  useEffect(() => {
    handlePrice();
  }, [cart])

  const handlePrice = () => {
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
    setPrice(total);
  }

  const addItems = (item, count) => {
    if(count === -1 && item.amount === 1) {
        return
    }
    const updatedCart = cart.map((product) =>
      product.id === item.id ? { ...product, amount: product.amount + count } : product
    ).filter((product) => product.amount > 0);
    setCart(updatedCart);
    handlePrice();
  }

  const cartRemove = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
    const cart2 = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = cart2.filter((product) => product !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    handlePrice();
  }

  return (
    <div className="mt-32 w-full min-h-screen bg-aliceblue">
      {
        cart.map((item) => {
          return (
            <div key={item.id} className="w-4/5 mx-auto mb-5 gap-8 p-5 flex xxs:flex-col justify-between items-center shadow-md">
              <div className="w-52 h-4/5">
                <img src={item.image} alt="image" className="w-full h-full" />
                <p>{item.title}</p>
                <span className="text-xl">{item.price} $</span>
              </div>
              <div className="w-52 h-full">
                <button className="w-12 h-10 m-2 bg-gray-800 text-white" onClick={() => addItems(item, +1)}>+</button>
                <button className="w-12 m-2 bg-gray-800 text-white">{item.amount}</button>
                <button className="w-12 h-10 m-2 bg-gray-800 text-white" onClick={() => addItems(item, -1)}>-</button>
              </div>
              <div className="w-52 xxs:w-full h-full flex xxs:justify-end justify-around items-center">
                <button className="w-20 h-7 rounded bg-gray-800 text-white" onClick={() => cartRemove(item.id)}>Remove</button>
              </div>
            </div>
          )
        })
      }

      <div className="w-full h-24 sticky bottom-0 bg-gray-800 text-white text-4xl flex justify-between p-2 px-12 items-center">
        <span>Total Price of All carts is :</span>
        <span> Rs - {price.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartComp
