var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  render: function () {
    return <div>
      {this.renderList()}
    </div>
  },
  renderList: function() {
    if(!this.props.items) {
      return <h5>
        Add a to-do to get started.
      </h5>
    } else {
      var children = [];
      for(var key in this.props.items) {
        var item = this.props.items[key];
        item.key = key;

        children.push(
          <ListItem
            item={item} 
            key={key}
            >
          </ListItem>
        )
      }

      return children;
    }
  }
});
