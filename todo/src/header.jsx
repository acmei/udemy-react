var React = require('react');

module.exports = React.createClass({
  // controlled form element means value inputting is directly tied to this.state
  getInitialState: function() {
    return {
      text: ''
    }
  },
  render: function() {
    return <div className='input-group'>
      <input 
        value={this.state.text}
        onChange={this.handleInputChange}
        type='text' 
        className='form-control' />
      <span className='input-group-btn'>
        <button 
          onClick={this.handleClick}
          className='btn btn-success' 
          type='button'>
          Add
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    // Send value of input to Firebase
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    // clear out text currently in input field after submitting
    this.setState({text: ''});
  },
  handleInputChange: function(event) {
    // shows value of input when user types
    this.setState({text: event.target.value});
  }
});
