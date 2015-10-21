/**
 * Created by lizhaoguang on 15/10/20.
 */
const React = require('react');
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

const AppBar = require('./app-bar');
const BasePage = require('./base-page');

class UserPage extends BasePage {
    getClassName() {
        return 'UserPage';
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{position:"absolute", width: "100%"}}>
                <AppBar
                    title="胶囊日记"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.showLeftNav}
                    iconElementRight={<IconButton><FontIcon className="muidocs-icon-action-home" /></IconButton>}
                    />
                <Card>
                    <CardHeader
                        title="Title"
                        subtitle="Subtitle"
                        avatar={<Avatar>A</Avatar>}/>
                    <CardHeader
                        title="Demo Url Based Avatar"
                        subtitle="Subtitle"
                        avatar="http://lorempixel.com/100/100/nature/"/>
                    <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
                        <img src="http://lorempixel.com/600/337/nature/"/>
                    </CardMedia>
                    <CardTitle title="Title" subtitle="Subtitle"/>
                    <CardActions>
                        <FlatButton label="Action1"/>
                        <FlatButton label="Action2"/>
                    </CardActions>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
            </div>
        );
    }
}


module.exports = UserPage;