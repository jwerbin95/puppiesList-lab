import React, { Component } from 'react';
import DogForm from './DogForm'
import PuppyList from './PuppyList'
export default class MainContainer extends Component{
	state={
		dogs: []
	}
	addDog = (dog) =>{
		let newDogs = this.state.dogs
		newDogs.push(dog)
		this.setState({
			dogs: newDogs
		})
		
	}	
	deleteDog = (key) =>{
		let newDogs = this.state.dogs
		newDogs.splice(key, 1)
		this.setState({
			dogs: newDogs
		})
	}
	updateDog = (key) => {
		let newDogs = this.state.dogs
		//newDogs[key]=
	}
	render() {
		return(
			<div>
			<h3>Hello, {this.props.username}</h3>
				<div className='listWrapper'>
					<ul className='list'>
						<PuppyList dogs={this.state.dogs} deleteDog={this.deleteDog} updateDog={this.updateDog}/>
					</ul>
				</div>
				<DogForm addDog={this.addDog}/>
			</div>
		)
	}
}