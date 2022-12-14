import React, { Component } from 'react';
import "./CollegePredictor.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getCollege } from '../Functions/getCollege';
import { getRank } from '../Functions/calculateRank';
import { create } from '../Functions/createLocationList';
import AppBar from "../Components/AppBar"
import BasicTable from '../Components/Table';

//98.9 for category

class CollegePredictor extends Component {
    state = {
        city: 0,
        caste: 0,
        rank: null,
        list: null,
        locations: create()
    }

    handleChange = (event) => {
        this.setState({ city: event.target.value.toString() })
    }

    handleCaste = (event) => {
        this.setState({ caste: event.target.value.toString() })
    }

    handleMarks = (event) => {
        console.log(getRank(event.target.value))
        this.setState({ rank: getRank(event.target.value) })
    }

    handleSubmit = () => {
        this.setState({ list: null });
        if (this.state.rank && this.state.city && this.state.caste) {
            this.setState({ list: getCollege(parseInt(this.state.rank), this.state.city, this.state.caste) })
        }
    }

    render() {
        return (
            <div>
                <AppBar />
                <div className='container' >
                    <div className='form' >
                        <div className='title-1' >
                            Enter JEE Main Paper 1 Exam Details
                        </div>

                        <div className='input-parent' >
                            <TextField onChange={this.handleMarks} id="outlined-basic" label="JEE Main Paper 1 Marks" variant="outlined" className='input' />
                        </div>
                        <div className='input-parent' >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Your Home State</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.city}
                                    label="Select Your Home State"
                                    onChange={this.handleChange}
                                >
                                    {
                                        this.state.locations &&
                                        this.state.locations.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={"" + item}>{item}</MenuItem>
                                            )
                                        })
                                    }
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
                            <Button onClick={this.handleSubmit} variant="contained">Submit</Button>
                        </div>
                    </div>

                    <div className='wrap' >
                        {
                            this.state.list?(
                                <div className="list" >
                                    <BasicTable data={this.state.list} />
                                </div>
                            ):(
                                <div style={{height:"80vh", display:'flex', justifyContent:"center", alignItems:"center"}} >
                                    Please Enter Data
                                </div>
                            )
                        }
                    </div>
                </div>


            </div>
        );
    }
}

export default CollegePredictor;