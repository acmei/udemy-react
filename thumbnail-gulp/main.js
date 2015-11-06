(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/anita/ada/udemy-react/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
var options = {  
  thumbnailData: [
    {
      title: 'See Tutorials',
      number: 89,
      header: 'Learn React',
      description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
      imageUrl: 'http://formatjs.io/img/react.svg'
    },
    {
      title: 'See Tutorials',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }
  ]
}

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after rendering, please place it in my body tag
// React.render(element tag, where the element needs to be placed)
React.render(element, document.querySelector('.target'));

},{}]},{},["/Users/anita/ada/udemy-react/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5pdGEvYWRhL3VkZW15LXJlYWN0L3RodW1ibmFpbC1ndWxwL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxPQUFPLEdBQUc7RUFDWixhQUFhLEVBQUU7SUFDYjtNQUNFLEtBQUssRUFBRSxlQUFlO01BQ3RCLE1BQU0sRUFBRSxFQUFFO01BQ1YsTUFBTSxFQUFFLGFBQWE7TUFDckIsV0FBVyxFQUFFLG1JQUFtSTtNQUNoSixRQUFRLEVBQUUsa0NBQWtDO0tBQzdDO0lBQ0Q7TUFDRSxLQUFLLEVBQUUsZUFBZTtNQUN0QixNQUFNLEVBQUUsRUFBRTtNQUNWLE1BQU0sRUFBRSxZQUFZO01BQ3BCLFdBQVcsRUFBRSw2RkFBNkY7TUFDMUcsUUFBUSxFQUFFLHlDQUF5QztLQUNwRDtHQUNGO0FBQ0gsQ0FBQzs7QUFFRCxrQ0FBa0M7QUFDbEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRTFELHlEQUF5RDtBQUN6RCxrRUFBa0U7QUFDbEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBvcHRpb25zID0geyAgXG4gIHRodW1ibmFpbERhdGE6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1NlZSBUdXRvcmlhbHMnLFxuICAgICAgbnVtYmVyOiA4OSxcbiAgICAgIGhlYWRlcjogJ0xlYXJuIFJlYWN0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVhY3QgaXMgYSBmYW50YXN0aWMgbmV3IGxpYnJhcnkgZm9yIG1ha2luZyBmYXN0LCBkeW5hbWljIHBhZ2VzLiBSZWFjdCBpcyBhIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5nIGZhc3QsIGR5bmFtaWMgcGFnZXMuJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2Zvcm1hdGpzLmlvL2ltZy9yZWFjdC5zdmcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1NlZSBUdXRvcmlhbHMnLFxuICAgICAgbnVtYmVyOiAyNSxcbiAgICAgIGhlYWRlcjogJ0xlYXJuIEd1bHAnLFxuICAgICAgZGVzY3JpcHRpb246ICdHdWxwIHdpbGwgc3BlZWQgdXAgeW91ciBkZXZlbG9wbWVudCB3b3JrZmxvdy4gR3VscCB3aWxsIHNwZWVkIHVwIHlvdXIgZGV2ZWxvcG1lbnQgd29ya2Zsb3cuJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2JydW5jaC5pby9pbWFnZXMvb3RoZXJzL2d1bHAucG5nJ1xuICAgIH1cbiAgXVxufVxuXG4vLyBSZWFjdCwgcGxlYXNlIHJlbmRlciB0aGlzIGNsYXNzXG52YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsTGlzdCwgb3B0aW9ucyk7XG5cbi8vIFJlYWN0LCBhZnRlciByZW5kZXJpbmcsIHBsZWFzZSBwbGFjZSBpdCBpbiBteSBib2R5IHRhZ1xuLy8gUmVhY3QucmVuZGVyKGVsZW1lbnQgdGFnLCB3aGVyZSB0aGUgZWxlbWVudCBuZWVkcyB0byBiZSBwbGFjZWQpXG5SZWFjdC5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpKTtcbiJdfQ==
