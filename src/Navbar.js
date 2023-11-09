import React, { Component } from 'react';
import { MenuItem, Select, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import Slider from "rc-slider";
import "rc-slider/assets/index.css"
import './Navbar.css'
import {Link} from "react-router-dom"

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format: "hex", open: false};
        this.HandleFormatChange = this.HandleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    HandleFormatChange(e){
        this.setState({format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    }

    closeSnackbar(){
        this.setState({open: false});
    }
    render() {
        const {level, changeLevel} = this.props;
        const {format} = this.state;
        return (
            <header className='navbar'>
                <div className='logo'>
                    <Link to="/">Color Picker</Link>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className="slider">
                     <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
                    </div>
                </div>
                <div className='select-container'>
                  <Select value={format} onChange={this.HandleFormatChange}>
                    <MenuItem value="hex">Hex - #ffffff</MenuItem>
                    <MenuItem value="rgb">Hex - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">Hex - rgba(255,255,255, 1.0)</MenuItem>
                  </Select>
                </div>
                <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                open={this.state.open} 
                autoHideDuration={3000}
                message={<span id="message-id">Format Changed to {format.toUpperCase()}!</span>}
                ContentProps={{"aria-describedby":"message=id"}}
                onClose={this.closeSnackbar}
                action={[
                    <IconButton onClick={this.closeSnackbar} >
                        <CloseIcon color="inherit" key='close' aria-label='close'/>
                    </IconButton>
                ]}/>
            </header>
        );
    }
}

export default Navbar;