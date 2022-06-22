import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import Pagination from '@material-ui/lab/Pagination';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
// import Title from '../title';


const columns = [
    { id: 'name', label: 'Name', minWidth: 120 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

    },
    container: {
        maxHeight: 440,
    },
    rootPagi: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 10,

        "& .MuiPaginationItem-page.Mui-selected": {
            color: "#fff",
            backgroundColor: "#0964bd"
        },
        "& .MuiButtonBase-root.Mui-disabled": {
            backgroundColor: "#00000014",
            opacity: "1",

        },
        "& .MuiPaginationItem-root": {
            color: "#0964bd",
            margin: 0,
        },
        "& .MuiPaginationItem-rounded": {
            borderRadius: 0,
        },
        "& .MuiPagination-ul": {
            borderRadius: 6,
            border: "1px solid #80808070"
        },
        "& li": {
            borderRight: "1px solid #80808070"
        },
        "& li:last-child": {
            borderRight: 0
        }

    },
    paper: {
        position: 'absolute',
        width: "80vw",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        "& .input__icon": {
            width: 250
        },
        "& .input_box input": {
            width: 900,
        }
    }

}));

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}



export default function StickyHeadTable(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const body = (
        <div style={modalStyle} className={` login-form ${classes.paper} `}>
            <h2>Modal Title</h2>
            <div className='login-input'>
                <div className='input__icon'>
                    content
                </div>
                <div className='input_box'>
                    <input type="text"></input>
                </div>
            </div>
            <div className='login-input'>
                <div className='input__icon'>
                    content
                </div>
                <div className='input_box'>
                    <input type="text"></input>
                </div>
            </div>
            <div className='login-input'>
                <div className='input__icon'>
                    content
                </div>
                <div className='input_box'>
                    <input type="text"></input>
                </div>
            </div>
            <div>
                <input type="checkbox" value="checkbox" /> checkbox
            </div>
            <div className='login-input'>
                <div className='input__icon'>
                    content
                </div>
                <div className='input_box'>
                    <input type="text"></input>
                </div>
            </div>
            <div className='login-input'>
                <div className='input__icon'>
                    content
                </div>
                <div>
                    <input type="checkbox" />check
                    <input type="checkbox" />check
                    <input type="checkbox" />check
                </div>
            </div><div className='login-input'>
                <div className='input__icon'>
                    content
                </div>
                <div>
                    <input type="checkbox" />check
                </div>
            </div><div className='login-input'>
                <div className='input__icon'>
                    content
                </div>  
                <div className='check__box'>
                    <input type="checkbox" />check
                </div>
            </div>

        </div>
    )

    return (
        <>
            <h2>{props.name}</h2>
            <div className='admin-inner'>
                <div className='button-group'>
                    <Button className='button-dowload btn-big btn'>Dowload</Button>
                    <Button onClick={handleOpen} className='button-dowload btn-big btn'>Upload</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                </div>
                <Pagination className={classes.rootPagi} count={5} showFirstButton showLastButton shape='rounded' />
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination style={{ marginTop: 10 }} className={classes.rootPagi} count={5} showFirstButton showLastButton shape='rounded' />
                </Paper>
            </div>
        </>
    );
}