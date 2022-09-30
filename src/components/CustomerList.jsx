import React, { useEffect, useState } from 'react';

import { Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction, deleteUserAction } from '@/store/actions/creators';
import * as ReactBootstrap from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const UsersList = () => {

    let dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);


    const { users } = useSelector(state => state.user);

    const usersPerPage = 7;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure You want to delete?"));
        dispatch(deleteUserAction(id));
    }

    useEffect(() => {
        dispatch(getUsersAction(), setLoading(true));
        // dispatch( getUsersContent() );
    }, [dispatch]);

    return (
        <div className="container" >
            <Card >
                <Card.Header className={"border border-dark bg-dark text-white"}> UserList</Card.Header>
                <Card.Body>
                    <span className="col-md-8">
                        <span className="input-group mb-3 ">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Search user"
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
                            />
                            <Link type="button" to={'/add'} className="btn btn-primary " id="tab">Add User</Link>
                        </span>
                    </span>

                    <Table variant="" >
                        <thead className={"border border-dark bg-dark text-white"}>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ?
                                users.slice(pagesVisited, pagesVisited + usersPerPage).filter(val => {
                                    console.log('val:',val)
                                    if (searchTerm === "") {
                                        return val;
                                    } else if (
                                        val.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.id.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.location.country.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return val;
                                    }
                                }).map((user) => {
                                    console.log('user::',user)
                                    return (
                                        <tr key={user.id.value+user.location.street.number}>
                                            <td>{user.id.value}</td>
                                            <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                                            <td> {user.email}</td>
                                            <td>{`${user.location.country} ${user.location.city} ${user.location.street.number} ${user.location.street.name}`}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <Link type="button" to={'/update/' + user.id.value} className="btn btn-info">Edit</Link>
                                                    <Link type="button" to={'/details/' + `${user.name.title}-${user.name.first}-${user.name.last}`} user={user} className="btn btn-warning">Details</Link>
                                                    <Button type="button" onClick={() => handleDelete(user.id.value)} className="btn btn-danger">Delete</Button>

                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }) :
                                <ReactBootstrap.Spinner animation="border" variant="primary" />
                            }

                        </tbody>

                    </Table>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttns"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}

                    />
                </Card.Body>

            </Card>
        </div >

    );
}

export default UsersList;
