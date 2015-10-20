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

var Diary = require('./diary');
/**
 * Events:onTouchDiaryHeader
 */
const DiaryList = React.createClass({
  render() {
    let diaries = this.props.diaries;
    return (
      <div style={{padding: 10, paddingBottom: 0, backgroundColor: "#f3f3f3"}}>
        {diaries.map((diary) => <Diary key={diary.id} data={diary} onTouchHeader={this.props.onTouchDiaryHeader} />)}
      </div>
    );
  },
});

module.exports = DiaryList;
