// JSX: an extension of JS that allows you to write HTML along side with JS. Must be compiled from file to JS.
{
  render: function() {
    return <div>
      Hello World!
    </div>
  }
}

// Compile to JS
{
  render: function() {
    return React.createElement('div', null, 'Hello World!')
  }
}
