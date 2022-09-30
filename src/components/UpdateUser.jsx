import React, { useEffect, useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { getUserAction, updateUserAction } from '@/store/actions/creators';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


const UpdateUser = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let { useParamsId } = useParams();

    const [state, setState] = useState({
        name: '',
        email: '',
        image: '',
        location: '',
        id: ''
    });

    const { user } = useSelector((state) => state.user);
    console.log('p',user, useParamsId)
    useEffect(() => {
        dispatch(getUserAction(useParamsId));
    }, []);

    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user]);

    const { name, email, location, id } = state;

    const handleTextChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log(state);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserAction(state, useParamsId));
        history.push("/");

    }

    return (
        <div className="container" id="update" >
            <Card className={"border border-dark bg-dark text-white"} >
                <Card.Header><h3>Edit User</h3></Card.Header>
                <div className="form-container">
                    <Form onSubmit={handleOnSubmit}>
                        <Card.Body >
                            <div className="form-group" >
                                <label>Name</label>
                                <input
                                    type="text" name="name"
                                    onChange={handleTextChange}
                                    value={name || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                            <div className="form-group" >
                                <label>Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleTextChange}
                                    value={email || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                            <div className="form-group" >
                                <label>Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    onChange={handleTextChange}
                                    value={location || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                            <div className="form-group" >
                                <label>ID</label>
                                <textarea
                                    type="text"
                                    name="id"
                                    onChange={handleTextChange}
                                    value={id || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>

                            <br></br>


                            <div className="form-group">
                                <button onChange={handleTextChange} className="btn btn-primary" type="submit">Edit User</button>
                                <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                    Back
                                </Button>



                            </div>

                        </Card.Body>
                    </Form>
                </div>
            </Card >
            {/* )} */}
        </div >
    );
}


export default UpdateUser;