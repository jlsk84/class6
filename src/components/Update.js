import React, { Component } from "react";

export default class Update extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            email: '',
            mobile: '',
            course: ''
        }
        this.submitHandler = this.submitHandler.bind(this); // bind the submit handler
    }

    componentDidMount(){
        // reading single user data
        const user = this.props.userAPI.getById(this.state.id);
        // console.log("user ", user); we cannot directly show because this is a promise request so we will use then and catch
        user.then(res => {
            console.log("user ", res.data);
            this.setState({
                // user: res.data,
                name: res.data.name,
                email: res.data.email,
                mobile: res.data.mobile,
                course: res.data.course
            })
        }).catch(err => console.log(err.message));
    }

    submitHandler(e){
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            course: this.state.course
        };
        console.log("updated ", data);
        // store the data
        const output = this.props.userAPI.update(this.state.id,data);
        output.then(res =>{
            alert("Update successfull");
            // window.location.href = "/";
            this.props.history.push("/"); // using the push stack method that already exists in router
        }).catch(err => console.log(err));
    }

    render(){
        const { name, email, mobile, course } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="display-3 text-center">Update user</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" className="form-control" value={name} onChange={(e) => this.setState({name: e.target.value})} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email" className="form-control" value={email} onChange={(e) => this.setState({email: e.target.value})} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Mobile</label>
                                        <input type="text" name="mobile" id="mobile" className="form-control" value={mobile} onChange={(e) => this.setState({mobile: e.target.value})} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Course</label>
                                        <input type="text" name="course" id="course" className="form-control" value={course} onChange={(e) => this.setState({course: e.target.value})} required />
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