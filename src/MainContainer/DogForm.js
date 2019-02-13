import React, { Component } from 'react';

export default class DogForm extends Component{
	inputRef = React.createRef()
	state={
		name:"",
		age:0,
		breed:""
	}
	handleChange=(event)=>{
		event.preventDefault()

		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		})
	}
	handleSubmit=(event)=>{
		let dog = {
			name: this.state.name,
			age: this.state.age,
			breed: this.state.breed
		}
		event.preventDefault()
		this.props.addDog(dog)
		this.setState({
			name: "",
			age: 0,
			breed: ""
		})
	}
	render(){
		return(
			<div>
				<form id="dogForm" onSubmit={this.handleSubmit}>
					<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} ref={this.props.inputRefName}/>
					<input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} ref={this.props.inputRefAge}/>
					<input type="text" name="breed" placeholder="Breed" value={this.state.breed} onChange={this.handleChange} ref={this.props.inputRefBreed}/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
	
}

