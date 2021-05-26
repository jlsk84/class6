import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        // read logic
        const data = this.props.userAPI.getAll();
        data.then(res =>{
            console.log(res.data);
            this.setState({
                users: res.data
            });
        }).catch(err => console.log(err));
    }

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
                                <div className="row">
                                    {
                                        this.state.users.map((item,key) => {
                                            return (
                                                <div className="col-md-4" key={key}>
                                                    <div className="card mt-2 mb-2">
                                                        <div className="card-body">
                                                            <ul className="list-group">
                                                                <li className="list-group-item">
                                                                    <strong>Name</strong>
                                                                    <span className="float-end"> {item.name}</span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <Link to={`/details/${item.id}`} className="btn btn-outline-info float-end">Details</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        );
    }
}

export default Home;