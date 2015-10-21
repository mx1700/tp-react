var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('./components/home-page');
var UserPage = require('./components/user-page');
import { Router, Route, Link, IndexRoute } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { History } from 'react-router'

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


const mui = require('material-ui');
const {
    Avatar,
    Card,
    CardHeader,
    CardText,
    CardTitle,
    CardMedia,
    CardActions,
    FlatButton,
    LeftNav,
    MenuItem,
    IconMenu,
    IconButton,
    MoreVertIcon,
    FontIcon,
    Styles,
    List,
    ListItem,
    ContentInbox
    } = mui;

import HashPage from './components/hash-page.js'

ReactDOM.render((<HashPage defaultPage={HomePage} />), document.getElementById('example'));

//ReactDOM.render(
//    <UserPage />,
//    document.getElementById('example')
//);

//const App = React.createClass({
//    mixins: [ History ],
//    render() {
//        const { pathname } = this.props.location;
//        return (
//            <div>
//                <ReactCSSTransitionGroup component="div" transitionName="example">
//                    {React.cloneElement(this.props.children || <div />, { key: pathname })}
//                </ReactCSSTransitionGroup>
//            </div>
//        )
//    }
//});
//
//ReactDOM.render((
//    <Router>
//        <Route path="/" component={App}>
//            <IndexRoute component={HomePage} />
//            <Route path="home" component={HomePage} />
//            <Route path="user" component={UserPage} />
//        </Route>
//    </Router>
//), document.getElementById('example'));

//class App {
//}
//
//var app = new App();
//
//
//class AppPage extends BasePage {
//    getClassName() {
//        return "AppPage";
//    }
//
//    constructor(props) {
//        super(props);
//        app.appPage = this;
//        this.state = { pageStack: [] };
//    }
//
//    pushPage(page) {
//        this.state.pageStack.push(page);
//        this.forceUpdate();
//        console.log(this.state.pageStack);
//    }
//
//    popPage() {
//        this.state.pageStack.pop();
//        this.forceUpdate();
//        console.log(this.state.pageStack);
//    }
//
//    render() {
//        return (
//            <div>
//                {this.state.pageStack.map((page) => { return page; })}
//            </div>
//        );
//    }
//}
//
//class FirstPage extends BasePage {
//
//    constructor(props) {
//        super(props);
//        this.state = { time: 1 };
//        this.timer = setInterval(() => {
//            this.setState({ time: this.state.time + 1 });
//        }, 1000);
//    }
//
//    getClassName() {
//        return "FirstPage";
//    }
//
//    toSecond() {
//        app.appPage.pushPage(<SecondPage />);
//    }
//
//    back() {
//        app.appPage.popPage();
//    }
//
//    componentWillUnmount() {
//        super.componentWillUnmount();
//        clearInterval(this.timer);
//    }
//
//    render() {
//        return (
//            <div style={{position:"absolute", width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff"}}>
//                <div style={{ width: "100%", height: "100%",overflow:"scroll" }}>
//                    <Card>
//                        <CardHeader
//                            title="Title"
//                            subtitle="Subtitle"
//                            avatar={<Avatar>A</Avatar>}/>
//                        <CardHeader
//                            title="Demo Url Based Avatar"
//                            subtitle="Subtitle"
//                            avatar="http://lorempixel.com/100/100/nature/"/>
//                        <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
//                            <img src="http://lorempixel.com/600/337/nature/"/>
//                        </CardMedia>
//                        <CardTitle title={this.state.time} subtitle="Subtitle"/>
//                        <CardActions>
//                            <FlatButton  onClick={this.toSecond} label="Next"/>
//                            <FlatButton  onClick={this.back} label="Back"/>
//                        </CardActions>
//                        <CardText>
//                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//                        </CardText>
//                    </Card>
//                </div>
//            </div>
//        );
//    }
//}
//
//class SecondPage extends BasePage {
//
//    getClassName() {
//        return "SecondPage";
//    }
//
//    toSecond() {
//        app.appPage.pushPage(<FirstPage />);
//    }
//
//    back() {
//        app.appPage.popPage();
//    }
//
//    render() {
//        return (
//            <div style={{position:"absolute", width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff"}}>
//                <div style={{ width: "100%", height: "100%",overflow:"scroll" }}>
//                    <Card initiallyExpanded={true}>
//                        <CardHeader
//                            title="Title"
//                            subtitle="Subtitle"
//                            avatar={<Avatar style={{color:'red'}}>A</Avatar>}
//                            actAsExpander={true}
//                            showExpandableButton={true}>
//                        </CardHeader>
//                        <CardText expandable={true}>
//                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//                        </CardText>
//                        <CardActions expandable={true}>
//                            <FlatButton onClick={this.toSecond} label="Action1"/>
//                            <FlatButton onClick={this.back} label="Action2"/>
//                        </CardActions>
//                        <CardText expandable={true}>
//                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//                        </CardText>
//                    </Card>
//                </div>
//            </div>
//        );
//    }
//}
//
////var a = <SecondPage />;
////console.log(a);
////console.log(new SecondPage());
//
//ReactDOM.render(<AppPage></AppPage>, document.getElementById('example'));
//app.appPage.pushPage(<FirstPage />);
