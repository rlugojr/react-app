var Router = ReactRouter;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

var Inbox = React.createClass({
  render: function () {
    return <h2>Inbox</h2>;
  }
});

// TODO: update to react 0.13.
var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Reactive greetings, stranger!</h1>
        <RouteHandler/>
      </div>
    )
  }
});

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}/>
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root/>, document.body);
  });
}, false);
