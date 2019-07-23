import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Cart extends Component {
  
  render() {
    let subtotal = 0
    let tax = 0
    let total = 0
    const shipping = 10
    const CartList = Object.keys(this.props.cameras).map(key => {
      const camera = this.props.cameras[key]
      if (camera.inCart) {
        subtotal += camera.price
        tax += camera.price * .086
        total += subtotal + tax
        return (
          <li key={key} className="d-flex justify-content-between py-3 border-bottom"><strong>{camera.name}</strong><strong>${camera.price} <FontAwesomeIcon onClick={() => this.props.removeFromCart(key)} icon={faTrash} /></strong></li>
        )
      }
    })
    return (
      <>
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div className="p-4">
            <ul className="list-unstyled mb-4">
              {CartList}
            </ul>
          </div>
          <div className="p-4">
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>${subtotal.toFixed(2)}</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>${tax.toFixed(2)}</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold">${total > 0 ? (total + shipping).toFixed(2) : 0}</h5>
              </li>
            </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
          </div>
      </>
    );
  }
}

export default Cart;