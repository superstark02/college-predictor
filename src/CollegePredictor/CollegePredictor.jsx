import React, { Component } from 'react';
import "./CollegePredictor.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class CollegePredictor extends Component {
    state = {
        age: 0,
        caste: 0,
        rank: null
    }

    handleChange = (event) => {
        this.setState({ age: event.target.value.toString() })
    }

    handleCaste = (event) => {
        this.setState({ caste: event.target.value.toString() })
    }

    handleRank = (event) => {
        this.setState({ rank: event.target.value.toString() })
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <div>
                <div className='title' >
                    JEE Main 2022 College Predictor
                </div>
                <div className='wrap' >
                    <div className='form' >
                        <div className='title-1' >
                            Enter JEE Main Paper 1 Exam Details
                        </div>

                        <div className='input-parent' >
                            <TextField id="outlined-basic" label="JEE Main Paper 1 Category Rank (Overall Rank if GEN)" variant="outlined" className='input' />
                        </div>
                        <div className='input-parent' >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Your Home State</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.age}
                                    label="Select Your Home State"
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={"Delhi"}>Delhi</MenuItem>
                                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='input-parent' >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Your Caste</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.caste}
                                    label="Select Your Caste"
                                    onChange={this.handleCaste}
                                >
                                    <MenuItem value={"General"}>General</MenuItem>
                                    <MenuItem value={"OBC"}>OBC</MenuItem>
                                    <MenuItem value={"SC/ST"}>SC/ST</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <Button variant="contained">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CollegePredictor;