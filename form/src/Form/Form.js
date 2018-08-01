import React, { Component } from 'react';
import './Form.css';
import { toast } from 'react-toastify';
import Table from '../Table/Table';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                name: '',
                phone: '',
                email: '',
                address1: '',
                address2: '',
                pin: '',
            },
            data: [],
            submitted: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputText = this.handleInputText.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }
    handleInputText(e) {
        e.preventDefault();
        var type = e.target.name;
        var value = e.target.value;
        this.setState({
            ...this.state, info: Object.assign({}, this.state.info, { [type]: value })
        })
        // console.log("this.state", this.state)
    }
    validateInput(e) {
        e.preventDefault();
        // validate pincode 
        if (this.state.info.pin != "") {
            var valid = this.state.info.email.match(/^[1-9][0-9]{5}$/);
            if (this.state.info.pin.length != 6 || valid) {
                toast.error("Enter valid PinCode", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate phone 
        if (this.state.info.phone != "") {
            if (this.state.info.phone.length != 10) {
                toast.error("Enter valid Contact Number", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate mail id
        if (this.state.info.email != "") {
            var valid = this.state.info.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            if (!valid) {
                toast.error("Enter valid Email ID", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate name
        if (this.state.info.name != "") {
            var valid = this.state.info.name.match(/^[A-Za-z ]+$/);
            if (!valid) {
                toast.error("Enter valid Name, accepts only alphabets", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate address1
        if (this.state.info.address1 != "") {
            var valid = this.state.info.address1.match(/[\w',-\\/.\s]/);
            if (!valid) {
                toast.error("Enter valid Address", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate address2
        if (this.state.info.address2 != "") {
            var valid = this.state.info.address2.match(/[\w',-\\/\s]/);
            if (!valid) {
                toast.error("Enter valid Address", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }

    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.info.name == "" || this.state.info.phone == "" || this.state.info.email == "" || this.state.info.address1 == "" || this.state.info.address2 == "" || this.state.info.pin == "") {
            toast.error("Please enter all the details", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        else {
            var newArr = this.state.data;
            var newObj = {};
            newObj = this.state.info;
            newArr.push(newObj);
            this.setState({
                ...this.state.data, data: newArr
            })
            toast.success("Details updated successfully", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
            // console.log("data", this.state.data);
        }
    }
    render() {
        return (
            <div className="background">
                <form className="formContainer">
                    <div>
                        <div>
                            <input type="text" name="name" onChange={this.handleInputText} onBlur={this.validateInput} placeholder="please enter your name" value={this.state.info.name == "" ? "" : this.state.info.name} className="textName" />
                        </div>
                        <div>
                            <input type="number" name="phone" onChange={this.handleInputText} onBlur={this.validateInput} placeholder="please enter your Contact Number" value={this.state.info.phone == "" ? "" : this.state.info.phone} className="contactNum" />
                        </div>
                        <div>
                            <input type="email" name="email" onChange={this.handleInputText} onBlur={this.validateInput} placeholder="please enter your Email ID" value={this.state.info.email == "" ? "" : this.state.info.email} className="mailId" />
                        </div>
                        <div>
                            <div>
                                <input type="text" name="address1" onChange={this.handleInputText} onBlur={this.validateInput} placeholder="please enter your Address" value={this.state.info.address1 == "" ? "" : this.state.info.address1} className="address" />
                            </div>
                            <div>
                                <input type="text" name="address2" onChange={this.handleInputText} onBlur={this.validateInput} placeholder="please enter your Address" value={this.state.info.address2 == "" ? "" : this.state.info.address2} className="address" />
                            </div>
                            <div>
                                <input type="number" name="pin" onChange={this.handleInputText} onBlur={this.validateInput} placeholder="please enter your Pincode" value={this.state.info.pin == "" ? "" : this.state.info.pin} className="pincode" />
                            </div>
                        </div>
                        <div>
                            <button name="submit" onClick={this.handleSubmit} className="btn" > SUBMIT </button>
                        </div>
                    </div>

                </form>
                <div>
                    {this.state.data.length > 0 &&
                        <Table dataFromParent={this.state.data} />
                    }
                </div>

            </div>
        );
    }
}

export default Form;
