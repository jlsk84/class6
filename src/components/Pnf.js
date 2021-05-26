import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Pnf extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-danger">404 Page Not Found</h3>
                        <Link to="/" className="btn btn-outline-info">Return to Home</Link>
                    </div>
                </div>
            </div>
        );
    }
}
