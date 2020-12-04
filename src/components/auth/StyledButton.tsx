import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            width: '88%',
            marginTop: '3%',
            backgroundColor: '#323232'
        }
    }),
);

export default function StyledButton() {
    const classes = useStyles();

    return (
        <Button variant="contained" color="primary" className={classes.button} onClick={() => window.location.href = "/home"}> 
            Entrar
        </Button>
    );
}