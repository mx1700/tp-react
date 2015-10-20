var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('./components/home-page');
var UserPage = require('./components/user-page');
import { Router, Route, Link, IndexRoute } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { History } from 'react-router'

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//ReactDOM.render(
//    <UserPage />,
//    document.getElementById('example')
//);

const App = React.createClass({
    mixins: [ History ],
    render() {
        const { pathname } = this.props.location;
        return (
            <div>
                <ReactCSSTransitionGroup component="div" transitionName="example">
                    {React.cloneElement(this.props.children || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="home" component={HomePage} />
            <Route path="user" component={UserPage} />
        </Route>
    </Router>
), document.getElementById('example'));
