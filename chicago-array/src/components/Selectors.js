import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

import { connect } from "react-redux";
import { CardActionArea } from "@material-ui/core";
import { fetchData } from "../actions";

// Selectors = (event) => {
//     event.preventDefault()
//     this.props.selectors(this.state)
//     this.setState({
// sensorType: ['ED AQ IP'],
// measure: 'Temp' ,
// time: '24',
// area: 'Uptown'
//     })
// }

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

class Selectors extends React.Component {
  state = {
    sensorType: "",
    measure: "",
    time: null,
    area: ""
  };

  handleChange = sensorType => event => {
    this.setState({ [sensorType]: event.target.name });
    this.getMeasures(event.target.name);
  };

  fetchData = event => {
    event.preventDefault();
    this.props.fetchData(this.state);
  };

  getMeasures = name => {
    console.log(name);
  };

  render() {
    const { classes } = this.props;
    const { sensorType, measure, time, area } = this.state;
    const error = [sensorType, measure, time, area].filter(v => v).length !== 2;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">
            Select Measures for Data Visualization
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="sensorType"
                  checked={sensorType}
                  onChange={this.handleChange("sensorType")}
                  value="ED"
                />
              }
              label="Environmental Data"
            />
          </FormGroup>
          <FormHelperText>Select one measure per Sensor Type.</FormHelperText>
        </FormControl>
        <FormControl
          required
          error={error}
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend">Measures</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name={this.state.measure}
                  onChange={this.handleChange("temp")}
                  value="Temp"
                />
              }
              label={this.state.measure}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={area}
                  onChange={this.handleChange("area")}
                  value="Uptown"
                />
              }
              label="Community/Area"
            />
          </FormGroup>
          <FormHelperText>Select Only One Measure</FormHelperText>
        </FormControl>
        <section>
        <iframe src="https://plot.ly/~chris/1638" height="600px" width="1000px"></iframe>
        </section>
      </div>
    );
  }
}

Selectors.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  { fetchData }
)(withStyles(styles)(Selectors));
