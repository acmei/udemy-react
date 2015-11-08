var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // button name
  items: [ // list of items to show in dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
