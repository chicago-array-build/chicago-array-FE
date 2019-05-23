import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from 'react-redux';
import { fetchData } from '../../actions';


// Local MUI stylings
const styles = theme => ({
root: {
display: 'flex',
flexWrap: 'wrap',
flexDirection: 'column',
},
formControl: {
margin: theme.spacing.unit,
minWidth: 120,
maxWidth: 300,
},
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
PaperProps: {
style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
},
},
};

// Sensor and Measure Options
const sensors = [
'Environmental Data',
'Air Quality',
'Image Processing',
];

const measures = [
"Temp", 
"Ozone etc", 
"Vehicle Count", 
"Ped Count",
]

function getStyles(name, that) {
return {
fontWeight:
    that.state.sensor_type.indexOf(name) === -1
    ? that.props.theme.typography.fontWeightRegular
    : that.props.theme.typography.fontWeightMedium,
};
}

class MultipleSelect extends React.Component {
state = {
    "sensor_type": '',
    "measure": '',
    "time_period": "last 7 days",
    "community_area": "all",
};

handleChange = event => {
this.setState({ [event.target.name]: event.target.value });
};

handleChangeMultiple = event => {
const { options } = event.target;
const value = [];
for (let i = 0, l = options.length; i < l; i += 1) {
    if (options[i].selected) {
    value.push(options[i].value);
    }
}
this.setState({
    sensor_type: value,
    measure: value,
});
};

fetchData = (event) => {
    event.preventDefault()
    this.props.fetchData(this.state)
}

render() {
const { classes } = this.props;
// console.log(this.state)
return (
    <div className="filter-drops">
        <h5>Select a SENSOR and MEASURE type, then SUBMIT</h5>
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-sensor">SENSORS</InputLabel>
                <Select
                // multiple
                name="sensor_type"
                value={this.state.sensor_type}
                onChange={this.handleChange}
                input={<Input id="select-sensor" />}
                MenuProps={MenuProps}
                >
                {sensors.map(sensor => (
                    <MenuItem key={sensor} value={sensor} style={getStyles(sensor, this)}>
                    {sensor}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-measure">MEASURES</InputLabel>
                <Select
                // multiple
                name="measure"
                value={this.state.measure}
                onChange={this.handleChange}
                input={<Input id="select-measure" />}
                MenuProps={MenuProps}
                >
                {measures.map(ameasure => (
                    <MenuItem key={ameasure} value={ameasure} style={getStyles(ameasure, this)}>
                    {ameasure}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            {this.state.sensor_type && this.state.measure && (
                <div>
                    <button className="fetch-RSD" onClick={this.fetchData} type="submit">SUBMIT</button>
                </div>
            )}
        </div>
    </div>
);
}
}

const mapStateToProps = state => ({
    ...state
}) 

MultipleSelect.propTypes = {
classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchData })(withStyles(styles, { withTheme: true })(MultipleSelect));