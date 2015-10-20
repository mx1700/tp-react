const React = require('react');
const mui = require('material-ui');
const {
  Avatar,
  Card,
  CardHeader,
  CardText,
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
} = mui;

/**
 * Events:onTouchHeader
 */
const Diary = React.createClass({

  onTouchHeader() {
    if (this.props.onTouchHeader)
      this.props.onTouchHeader(this.props.key, this.props.data);
  },

  render() {
    let diary = this.props.data;
    let media = diary.photoUrl ? (
      <CardMedia>
        <img src={diary.photoUrl} />
      </CardMedia>
    ) : '';
    return (
      <Card initiallyExpanded={true} style={{marginBottom:10}}>
        <CardHeader
          title={diary.user.name}
          subtitle={diary.notebook_subject}
          avatar={<Avatar src={diary.user.iconUrl} />}
          onTouchTap={this.onTouchHeader}
          >
        </CardHeader>
        {media}
        <CardText expandable={true}>
          {diary.content}
        </CardText>

      </Card>
    );
  },
});

module.exports = Diary;
