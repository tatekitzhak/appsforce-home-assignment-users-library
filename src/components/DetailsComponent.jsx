import React, { useEffect, useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { getUserAction } from '@/store/actions/creators';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewDetails = (props) => {

    let dispatch = useDispatch();


    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        image: '',
        location: '',
        id: ''
    });
    let userID = useParams();
    const { user } = useSelector((state) => state.user);
    console.log('ViewDetails user:',user,userID)
    useEffect(() => {
        // dispatch(getUserAction(userID));
    }, []);

    useEffect(() => {
        if (user) {
            setUserDetails({ ...user });
        }
    }, [user]);

    const { name, email, image, location, id } = userDetails;

    return (
        <div className="container" id="update" >

            <Card className={"border border-dark bg-dark text-white"} >
                <Card.Header id="header" ><h3 className="profile">PROFILE DETAILS</h3></Card.Header>
                <Form>
                    <Card.Body id="body" >
                        <div className="container">
                            <div className="profile-item">
                                <h2 className=" p-3 "> <label id="label">Image </label><br></br> {image}</h2>
                            </div>
                            <div className="profile-item">
                                <h3><label id="label">Full Name :</label> {name}</h3>
                            </div>
                            <div className="profile-item">
                                <h3> <label id="label">Email :</label> {email}</h3>
                            </div>
                            <div className="profile-item">
                                <h3> <label id="label">location :</label> {location}</h3>
                            </div>
                            <div className="profile-item">
                                <h2 className=" p-3 "> <label id="label">id: </label><br></br> {id}</h2>
                            </div>
                            
                            <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                Home
                            </Button>
                            <Button id="btn" href={'/update/' + id} className="w-30 p-3 float-right" variant="primary" >
                                Update
                            </Button>
                        </div>



                    </Card.Body>
                </Form>
            </Card>

        </div >
    );

}


export default ViewDetails;