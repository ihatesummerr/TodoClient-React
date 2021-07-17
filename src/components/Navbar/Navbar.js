import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    CssBaseline,
    IconButton,
    Button,
    makeStyles,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ListOutlined, Home } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: 250,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [history]);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.name);
    };

    return (
        <>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'
                        className={classes.menuButton}
                        onClick={() => setOpen(true)}
                    >
                        <ListOutlined />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Todo List!
                    </Typography>
                    <Button variant='contained' color='secondary'>
                        Log In
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <List className={classes.drawer}>
                    <ListItem name='a' button onClick={handleClick}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem button onClick={() => history.push('/todo')}>
                        <ListItemIcon>
                            <ListOutlined />
                        </ListItemIcon>
                        <ListItemText primary='Todo List' />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
