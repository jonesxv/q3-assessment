import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div className="input-group">
            <input onChange={e => this.props.updateKeyword(e.target.value)} type="search" placeholder="Search..." aria-describedby="button-addon1" className="form-control border-0 bg-light" />
            <div className="input-group-append">
              <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;