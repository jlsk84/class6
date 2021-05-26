import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            user: ''
        }
    }

    componentDidMount(){
        const user = this.props.userAPI.getById(this.state.id);
        // console.log("user ", user); we cannot directly show because this is a promise request so we will use then and catch
        user.then(res => {
            console.log("user ", res.data);
            this.setState({
                user: res.data
            })
        }).catch(err => console.log(err.message));
    }

    render(){
        const { id, name, email, mobile, course } = this.state.user;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="display-3 text-center">User Details { id } </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Name</strong>
                                        <span className="float-end"> { name } </span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Email</strong>
                                        <span className="float-end"> { email } </span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Mobile</strong>
                                        <span className="float-end"> { mobile } </span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Course</strong>
                                        <span className="float-end"> { course } </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <Link to={`/update/${id}`} className="btn btn-primary btn-sm">Edit</Link>
                                <button className="btn btn-danger btn-sm float-end">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
