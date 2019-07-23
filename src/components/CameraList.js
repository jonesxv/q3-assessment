import React, { Component } from 'react';
import Camera from './Camera'

class CameraList extends Component {
  componentDidMount() {
    this.props.fetchCameras()
  }
  
  render() {
    const CameraList = Object.keys(this.props.cameras).map(key => {
      const camera = this.props.cameras[key]
      const name = camera.name.toLowerCase()
      if (this.props.filterKeyword.length > 0 ) {
        if (name.includes(this.props.filterKeyword)) {
          return (
            <Camera key={key} addToCart={this.props.addToCart} {...this.props.cameras[key]} />
          )
        }
      } else {
        return (
          <Camera key={key} addToCart={this.props.addToCart} {...this.props.cameras[key]} />
        )
      }
    })
    return (
      <div>
        <ul className="list-group shadow">
          {CameraList}
        </ul>
      </div>
    );
  }
}

export default CameraList;