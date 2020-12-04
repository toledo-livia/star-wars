import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Link } from '@material-ui/core';

import StyledButton from '../../components/auth/StyledButton';
import './style.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textEmail: {
            width: '88%',
            color: '#fff',
            '& label': {
                color: '#fff',
            },
            '& label.Mui-focused': {
                color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white',
                    textColor: 'white'
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                    textColor: 'white'
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'white',
                    textColor: 'white'
                },
            },
            '& .MuiInputBase-root': {
                color: '#fff'
            },
        },
        textPassword: {
            width: '88%',
            marginTop: '3%',
            '& label': {
                color: '#fff',
            },
            '& label.Mui-focused': {
                color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white',
                    textColor: 'white'
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                    textColor: 'white'
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'white',
                    textColor: 'white'
                },
            },
            '& .MuiInputBase-root': {
                color: '#fff'
            },
        },
        linkForgotPassword: {
            color: '#EDD700',
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "12px", 
            marginTop: "4%"
        },
        linkCreateAccount: {
            color: '#EDD700',
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "12px", 
            marginTop: "12%", 
            justifySelf: "end"
        }
    }),
);

export default function Register() {
    const classes = useStyles();

    return (
        <div>
            <div className="opacity">
                <div className="box">
                    <h1>CRIE SUA CONTA</h1>
                    <TextField id="nome" label="Nome" variant="outlined" className={classes.textEmail} />
                    <TextField id="sobrenome'" label="Sobrenome" variant="outlined" className={classes.textPassword} />
                    <TextField id="email" label="E-mail" variant="outlined" className={classes.textPassword} />
                    <TextField type="password" id="password" label="Senha" variant="outlined" className={classes.textPassword} />
                    <StyledButton />
                    <Link href="/" className={classes.linkForgotPassword}>Já possui uma conta? Clique aqui!</Link>
                </div>
            </div>
        </div>
    );
}