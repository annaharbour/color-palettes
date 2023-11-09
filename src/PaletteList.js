import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";

class PaletteList extends Component {
  constructor(props){
    super(props);
    this.state = {
      palette: ""
    };

    this.handlePaletteChange = this.handlePaletteChange.bind(this);
  }

  handlePaletteChange(e){
    this.setState({palette: e.target.value});
  }

  render() {
    const { palettes } = this.props;
    const {palette} = this.state;
    return (
      <div>
      {palettes && palettes.length > 0 ? (
        <div className="select-container">
          <Select value={palette} onChange={this.handlePaletteChange}>
            {palettes.map((palette) => (
              <MenuItem key={palette.id} value={palette.id}>
                <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
              </MenuItem>
            ))}
          </Select>
        </div>
      ) : (
        <p>No palettes available</p>
      )}
    </div>
    );
  }
}
export default PaletteList;