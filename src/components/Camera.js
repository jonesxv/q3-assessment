import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import ReactStars from 'react-stars'

class Camera extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">{this.props.name}</h5>
            <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2">${this.props.price}{this.props.onSale && <span className="sale">SALE</span>}</h6>
              <ReactStars
                count={5}
                value={this.props.rating}
                edit={false}
              />
            </div>
            <Button onClick={() => this.props.addToCart(this.props.id)}>Add to Cart</Button>
          </div><img src={this.props.picture} alt={this.props.name} width="200" className="ml-lg-5 order-1 order-lg-2" />
        </div>
      </li>
    );
  }
}

export default Camera;