import React, { Component } from 'react';

export default class PuppyList extends Component{
	render(){
		return(
			this.props.dogs.map((dog, i)=>{
				return(
					<li key={i}>
						Name: {dog.name} &nbsp; &nbsp; &nbsp; &nbsp; Age: {dog.age} &nbsp; &nbsp; &nbsp; &nbsp; Breed: {dog.breed}
						<button value={i} onClick={this.props.deleteDog.bind(null, i)}>Delete</button>
						<button value={i} onClick={this.props.updateDog.bind(null, i)}>Update</button>
					</li>	
				)
			})
		)
	}
}