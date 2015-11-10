var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl = 'https://amber-heat-6480.firebaseio.com/';

var App = React.createClass({
  // a group of methods on one object, that gets copied over to another object
  // Allows use of ReactFire methods in our component
  mixins: [ ReactFire ],
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },
  // only run once, when the component is mounted to DOM
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/');
    // bindAsObject given as method from ReactFire
    // takes React components and translates to Firebase
    // data is retrieved from endpoint and placed on
    // this.state.items (as noted in last param)
    // this.state.items => {}
    this.bindAsObject(this.fb, 'items');
    // on allows us to listen to events
    // value is triggered by fb when data comes in
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className='row panel panel-default'>
      <div className='col-md-8 col-md-offset-2'>
        <h2 className='text-center'>
          To-Do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items} />
        <hr />
        <div className={'content ' + (this.state.loaded ? 'loaded' : '')}>
          <List items={this.state.items}/>
          {this.deleteButton()}
        </div>
      </div>
    </div>
  },
  deleteButton: function() {
    if (this.state.loaded) {
      return <div className='text-center clear-complete'>
        <hr />
        <button 
          type='button'
          onClick={this.onDeleteDoneClick}
          className='btn btn-default'>
          Clear Complete
        </button>
      </div>
    }
  },
  onDeleteDoneClick: function() {
    for(var key in this.state.items) {
      if(this.state.items[key].done === true) {
        this.fb.child(key).remove();
      }
    }
  },
  handleDataLoaded: function() {
    this.setState({loaded: true});
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
