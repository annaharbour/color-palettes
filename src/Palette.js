import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import 'rc-slider/assets/index.css';
import './Palette.css'
import seedColors from "./seedColors";


class Palette extends Component {
  constructor(props){
    super(props);
    this.state = { level: 500, format: "hex" }
    this.changeLevel=this.changeLevel.bind(this);
    this.changeFormat=this.changeFormat.bind(this)
  }

  changeLevel(level){
    this.setState({level})
  }

  changeFormat(val){
    this.setState({format: val});
  }

  render() {
    const {colors, paletteName, emoji} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxes = colors[level].map(color=> 
      <ColorBox key={color.id} background={color[format]} name={color.name}/>)
    return (
      <div className='Palette'>
        <Navbar  palettes={seedColors} level={level} handleChange={this.changeFormat} changeLevel={this.changeLevel}/>
        <div className='Palette-colors'>{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
          </footer>
      </div>
    );
  }
}
export default Palette;