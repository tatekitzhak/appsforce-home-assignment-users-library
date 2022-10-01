import React, { Component } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { addUserAction } from '@/store/actions/creators';
import { connect } from 'react-redux';

class AddUser extends Component {

    state = {
        name: '',
        email: '',
        occupation: '',
        bio: ''
    }

    handleTextChange = event => {
        const { target: { name, value } } = event;
        this.setState({ ...this.state, [name]: value });
        console.log(this.state);
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUserAction(this.state);
        this.setState({
            name: '',
            email: '',
            location: '',
            id: ''
        });
    }


    render() {
        return (
            <div className="container" id="update" >
                <Card className={"border border-dark bg-dark text-white"} >
                    <Card.Header><h3>Add User</h3></Card.Header>
                    <div className="form-container">
                        <Form onSubmit={this.handleOnSubmit}>
                            <Card.Body >
                                <div className="form-group" >
                                    <label>Name</label>
                                    <input
                                        type="text" name="name"
                                        onChange={this.handleTextChange}
                                        value={this.state.name}
                                        className="form-control w-50 p-2"
                                    
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>Email address</label>
                                    <input
                                        type="email" name="email"
                                        onChange={this.handleTextChange}
                                        value={this.state.email}
                                        className="form-control w-50 p-2"
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>location</label>
                                    <input
                                        type="text" name="location"
                                        onChange={this.handleTextChange}
                                        value={this.state.location}
                                        className="form-control w-50 p-2"
                                        
                                    />
                                </div>
                                <div className="form-group" >
                                    <label>ID</label>
                                    <input
                                        type="text" name="id"
                                        onChange={this.handleTextChange}
                                        value={this.state.id}
                                        className="form-control w-50 p-2"
                                        
                                    />
                                </div>

                                <br></br>


                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Add User</button>
                                    <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                        Back
                                    </Button>



                                </div>

                            </Card.Body>
                        </Form>
                    </div>
                </Card>

            </div >
        );
    }

}
export default connect(null, { addUserAction })(AddUser);