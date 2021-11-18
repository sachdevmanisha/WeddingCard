import { Button } from "@material-ui/core";
import React, { useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import OpenInBrowserRoundedIcon from '@material-ui/icons/OpenInBrowserRounded';
import MoveToInboxRoundedIcon from '@material-ui/icons/MoveToInboxRounded';

const useStyles = makeStyles((theme) => ({
    backbutton: {
        paddingRight: '2200px',
        // alignContent:'right',
        paddingTop: '20px',
    },
    card: {
        height: '600px',
        width: '100%',
        margin: '20px',
        borderRadius:'15px',
        // border:'2px solid black',
        backgroundColor:'#F4C2C2'
        // '#FFB7C5'
    },
    imagesize:{
        maxWidth:'100%',
        height:'500px',
        padding:'35px'
    }
}));

function Opener(props) {
    const classes = useStyles();
    const [selectimg, setSelectimg] = useState()
    console.log('Props is', props.myName, props.myState)

    function addImage(e) {
       
        if (e.target.files && e.target.files.length > 0) {
            setSelectimg(e.target.files[0]);
        }
    }
    function removeImage(){
        setSelectimg();
    }

    return (
        <>
            {/* <Button variant={"outlined"}>Back</Button> */}
            <div className={classes.backbutton}> <Tooltip title=" Click to go back "><ArrowBackIcon onClick={props.myState} /></Tooltip> </div>

            <h1 style={{ backgroundColor: 'black', color: 'white' }}>Hello {props.myName} Together with our families, we invite you to be a part of our big day</h1>
            <Grid container>
                <Paper className={classes.card}>
                {selectimg && (
                <img
                    src={URL.createObjectURL(selectimg)}
                    alt="Thumb"
                    className={classes.imagesize}
                />
            
            )}
            </Paper>

            </Grid>

            {/* <Button variant="outlined" style={{}}>Add your Card</Button> */}
            <label for="file-ip-1" style={{paddingLeft:'1800px',fontSize:'20px' ,margin:'50px'}}><MoveToInboxRoundedIcon/>Upload Card </label>
    
             <input  
                type="file"
                id="file-ip-1"
                accept="image/*"
                onChange={addImage}
                    style={{display:'none'}}
            />
           

            <span style={{fontSize:'20px'}}><OpenInBrowserRoundedIcon onClick={removeImage} />Remove Card</span>

            

        </>
    );
}
export default Opener;