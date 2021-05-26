import React, { Component } from "react";
import { UserAPI } from "../api/UserAPI";
import UserProvider, { GlobalState } from "../GlobalState";

export default class Create extends Component{
    /**
     * Create static reference before the constructor
     * 
     */
    //static context = GlobalState;

    constructor(props){
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.mobile = React.createRef();
        this.course = React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            userData: {}
        }
        console.log(this.context)
    }

    submitHandler(e){
        e.preventDefault();
        const data = {
            name: this.name.current.value,
            email: this.email.current.value,
            mobile: this.mobile.current.value,
            course: this.course.current.value
        };
        console.log("new data ", data);
        this.setState({
            userData: data
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="display-3 text-center">Create new user</h3>
                    </div>
                </div>
                <GlobalState.Consumer>
                    {
                        value => {
                            console.log('consumer create ', value.UserAPI);
                            
                            return (
                                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" className="form-control" ref={this.name} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email" className="form-control" ref={this.email} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Mobile</label>
                                        <input type="text" name="mobile" id="mobile" className="form-control" ref={this.mobile} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Course</label>
                                        <input type="text" name="course" id="course" className="form-control" ref={this.course} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Create" className="btn btn-success" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                            )
                        }
                    }
                </GlobalState.Consumer>
            </div>
        );
    }
}