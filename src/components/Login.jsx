import React, { useState } from "react";
import Opener from "./Opener";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { pink, red } from "@material-ui/core/colors";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(10),
        textAlign: 'center',
        height: '100%',
        backgroundColor: 'pink',
        //   color:'Grey'  
    },
    paper1: {
        padding: theme.spacing(10),
        textAlign: 'center',
        height: '100%',
    },
    form: {
        width: '100%',
        marginBottom: '50px',


    },
    imagesize: {
        paddingTop: '100px',
        paddingRight: '500px'
    }
}));


function Login() {
    const [openerComp, setOpenerComp] = useState(false);
    const [person, setPerson] = useState({
        name: '',
        age: ''
    })
    const classes = useStyles();


    function takeValue(eve) {
        setPerson({
            ...person,
            name: eve.target.value
        })
        // return console.log('Changed', eve.target.value);

    }
    function goback() {
        // console.log('I am in Login')
        setOpenerComp(false);
        setPerson({...person});
    }

    return (
        <>
            {openerComp ? <Opener myName={person.name} myState={goback} /> :

                < Grid container>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper1}>
                            <span style={{ fontSize: '35px', fontFamily: 'MonoSpace' }}><Input  disableUnderline={true}  style={{height:'30px',marginRight:'150px',fontSize:'35px'}} placeholder="Bride's Name" /><br />weds<br /><Input   disableUnderline={true}  style={{height:'30px',marginLeft:'600px',fontSize:'35px'}} placeholder="Groom's Name" /></span>
                            <img className={classes.imagesize} src="../ring.jpeg" alt="Pic" />
                            <span style={{ fontSize: '25px', fontFamily: 'Gill Sans' }}>Taking their first step to eternity, join us to celebrate this special bond.</span>
                        </Paper>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}><h2>Please fill the Details</h2><br />

                            <form >
                                <Input className={classes.form} placeholder="Your Name Please..." inputProps={{ 'aria-label': 'description' }} onChange={takeValue} /><br />
                                <Input className={classes.form} placeholder="Your Age Please..." inputProps={{ 'aria-label': 'description' }} /><br />
                            </form>

                            <Button variant="outlined" onClick={() => setOpenerComp(true)}>Submit</Button>
                            {/* <h1>Welcome {person.name}</h1> */}
                            {/* <Button variant="outlined" onClick={submitfunction}>Submit</Button> */}
                        </Paper>
                    </Grid>
                </Grid>
            }
        </>

    )

}

export default Login;