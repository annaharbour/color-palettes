import React, { Component } from 'react';
import { MenuItem, Select } from '@mui/material';
import Slider from "rc-slider";
import "rc-slider/assets/index.css"
import './Navbar.css'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format: "hex"};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({format: e.target.value});
        this.props.handleChange(e.target.value);
    }
    render() {
        const {level, changeLevel, handleChange} = this.props;
        const {format} = this.state;
        return (
            <header className='navbar'>
                <div className='logo'>
                    <a href="/">Color Picker</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className="slider">
                     <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
                    </div>
                </div>
                <div className='select-container'>
                  <Select value={format} onChange={this.handleChange}>
                    <MenuItem value="hex">Hex - #ffffff</MenuItem>
                    <MenuItem value="rgb">Hex - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">Hex - rgba(255,255,255, 1.0)</MenuItem>
                  </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;