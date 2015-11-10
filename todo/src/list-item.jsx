var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://amber-heat-6480.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },
  render: function() {
    return <div className='input-group'>
      <span className='input-group-addon'>
        <input 
        type='checkbox' 
        onChange={this.handleDoneChange}
        checked={this.state.done}
        />
      </span>
      <input type='text' 
        className='form-control' 
        value={this.state.text}
        onChange={this.handleTextChange}
        />
      <span className='input-group-btn'>
        {this.changesButtons()}
        <button 
          className='btn btn-default'
          onClick={this.handleDeleteClick}
          >
          Delete 
        </button>
      </span>
    </div>
  },
  changesButtons: function() {
    if(!this.state.textChanged) {
      return null
    } else {
      return [
        <button className='btn btn-default'>Save</button>, 
        <button className='btn btn-default'>Undo</button>
      ]
    }
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked}
    this.setState(update);
    this.fb.update(update);
  },
  handleDeleteClick: function() {
    this.fb.remove();
  },
  handleTextChange: function(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  }
});
