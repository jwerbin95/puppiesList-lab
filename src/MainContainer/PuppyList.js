import React, { Component } from 'react';

export default class PuppyList extends Component{
	handleDelete=(event)=>{
		event.preventDefault()
		this.props.deleteDog(event.currentTarget.value)
	}
	handleUpdate=(event)=>{
		event.preventDefault()
		this.props.updateDog(event.currentTarget.value)
	}
	render(){
		return(
			this.props.dogs.map((dog, i)=>{
				return(
					<li key={i}>
						Name: {dog.name} &nbsp; &nbsp; &nbsp; &nbsp; Age: {dog.age} &nbsp; &nbsp; &nbsp; &nbsp; Breed: {dog.breed}
						<button value={i} onClick={this.handleDelete}>Delete</button>
						<button value={i} onClick={this.handleUpdate}>Edit</button>
					</li>
					
				)
			})
		)
	}
}