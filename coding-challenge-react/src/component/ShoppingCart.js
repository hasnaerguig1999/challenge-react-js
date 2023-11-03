import { useState } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const itemIndex = cart.findIndex(cartItem => cartItem.name === item.name)
    if (itemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[itemIndex].quantity += 1
      setCart(updatedCart)
    } else {
      setCart([...cart, { name: item.name, quantity: 1, price: item.price }])
    }
  }

  const removeFromCart = (item) => {
    const updatedCart = [...cart]
    const itemIndex = updatedCart.findIndex(cartItem => cartItem.name === item.name)
    updatedCart[itemIndex].quantity -= 1
    if (updatedCart[itemIndex].quantity === 0) {
      updatedCart.splice(itemIndex, 1)
    }
    setCart(updatedCart)
  }

  const getTotal = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity * item.price
    })
    return total.toFixed(2)
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => removeFromCart(item)}>-</button>
                {item.quantity}
                <button onClick={() => addToCart(item)}>+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${getTotal()}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart