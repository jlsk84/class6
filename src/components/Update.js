import React, { Component } from "react";

export default class Update extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="display-3 text-center">Update User</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Mobile</label>
                                        <input type="text" name="mobile" id="mobile" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Course</label>
                                        <input type="text" name="course" id="course" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Update" className="btn btn-success" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
