import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopUp from './PopUp'

export class Todoitem extends Component{

  getStyle = () => {
  	return {
  		background: '#f4f4f4',
  		padding: '10px',
  		borderBottom: '1px #ccc dotted',
  		textDecoration: this.props.todo.completed ? 
  		'line-through' : 'none'
  	}
  }

  render() {
  	const { id, title } = this.props.todo;
  	return(
  		<div style={this.getStyle()}>
  			<p>
  			<input type="checkbox" onChange={this.props.markComplete.bind 
  				(this, id)} /> {' '}
  			{ title }
  			<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        <button onClick={this.props.togglePopUp.bind(this, id)} style={popUpStyle}>x</button>
        {this.props.showPopup && <PopUp text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)} />}
  			</p>
  		</div>
  )
 }
}

// PropTypes
Todoitem.propTypes = {
	todo: PropTypes.object.isRequired
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

const popUpStyle = {
  background: '#0000ff',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'left'

}

export default Todoitem
