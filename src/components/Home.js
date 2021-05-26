import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="display-3 text-center">Users</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <Link to="/create" className="btn btn-outline-primary float-end">Add New</Link>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <Link to="/update" className="btn btn-outline-primary float-end">Update</Link>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <Link to="/details" className="btn btn-outline-primary float-end">Details</Link>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;