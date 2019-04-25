import React, {Component} from 'react';
import logo from './logo.svg'
import './App.css'

class Product extends Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="col s12 m6 l4">
                <div className="card white darken-1">
                    <div className="card-image white-text">
                        <img src={logo} className="img-responsive"/>
                    </div>
                    <div className="card-content white-text">
                        <h1 className="card-title"><strong>{this.props.nama}</strong></h1>
                        <h5>Ket.</h5>
                        <h6>{this.props.ket}</h6>
                    </div>
                    <div className="card-action">
                        <a onClick={this.props.deleteCard} id={this.props.id} href="#">Delete</a>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;