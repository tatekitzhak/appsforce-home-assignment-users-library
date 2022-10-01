import React, { useEffect, useState } from 'react';

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction, deleteUserAction } from '@/store/actions/creators';
import * as ReactBootstrap from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow)

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const UsersList = () => {
    const classes = useStyles();
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
        if (window.confirm(`Are you sure You want to delete the user by id ${id}?`));
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

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">ID</StyledTableCell>
                                    <StyledTableCell align="left">Name</StyledTableCell>
                                    <StyledTableCell align="left">Email</StyledTableCell>
                                    <StyledTableCell align="left">Location</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                        <TableBody>
                            {loading ?
                                users.slice(pagesVisited, pagesVisited + usersPerPage).filter(val => {
                                    if (searchTerm === "") {
                                        return val;
                                    } else if (
                                        val.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.name.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.id.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.location.country.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return val;
                                    }
                                }).map((user) => {
                                    return (
                            
                                        <StyledTableRow key={user.id.value+user.location.street.number}>
                                            <StyledTableCell component="th" scope="row">
                                            {user.id.value}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{`${user.name.title} ${user.name.first} ${user.name.last}`}</StyledTableCell>
                                            <StyledTableCell align="left">{user.email}</StyledTableCell>
                                            <StyledTableCell align="left">{`${user.location.country} ${user.location.city} ${user.location.street.number} ${user.location.street.name}`}</StyledTableCell>
                                            <StyledTableCell align="left" component="th" scope="row">
                                                <Link type="button" to={'/update/' + user.id.value} className="btn btn-info">Edit</Link>
                                                <Link type="button" to={'/details/' + user.id.value} user={user} className="btn btn-warning">Details</Link>
                                                <Button type="button" onClick={() => handleDelete(user.id.value)} className="btn btn-danger">Delete</Button>

                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }) :
                                <ReactBootstrap.Spinner animation="border" variant="primary" />
                            }
                        </TableBody>
                        </Table>
                    </TableContainer>
                    
                </Card.Body>
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
            </Card>
        </div >

    );
}

export default UsersList;
