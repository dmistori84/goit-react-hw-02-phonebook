import { Component } from "react";

export class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        //this.props.onSubmit(this.state);
        //так:
        // this.props.getContacts({
        //     name: this.state.name,
        // })
        // або так:
        this.props.getContacts(this.state)
        this.reset();
    }

    reset = () => {
        this.setState({name:'', number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    /> 
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        required
                    /> 
                </label>
                <button type="submit">Add contact</button>      
            </form>
        )
    }
}

