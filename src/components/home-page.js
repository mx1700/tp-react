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

const AppBar = require('./app-bar');
const BasePage = require('./base-page');
const DiaryList = require('./diary-list');

const ThemeManager = Styles.ThemeManager;
const MyRawTheme = require('./theme');

const diariesData = {
    "count": 1253,
    "page": 1,
    "page_size": 10,
    "diaries": [{
        "id": 9238265,
        "user_id": 100059013,
        "notebook_id": 581049,
        "notebook_subject": "\u6574\u4e2a\u5927\u5b66\u6ca1\u6709\u5199\u65e5\u8bb0",
        "content": "11.9\u53f7\u5c31\u8981\u62cd\u6bd5\u4e1a\u7167\u4e86\uff0c\u5927\u5bb6\u90fd\u5728\u5fd9\u7740\u4e70\u4e00\u5957\u5e05\u6c14\u7684\u6b63\u88c5\uff0c\u800c\u6211\u4e5f\u4e00\u6837\uff0c\u53ea\u53ef\u60dc\u901b\u4e86\u5f88\u591a\u5e97\u90fd\u6ca1\u6709\u4e70\u6210\uff0c\u8fd9\u53ef\u600e\u4e48\u529e\u597d\u3002\u611f\u89c9\u65f6\u95f4\u8fd8\u591a\uff0c\u4e0d\u6025\u7740\u4e70\uff0c\u4f46\u5374\u4e0d\u77e5\u9053\u53bb\u54ea\u91cc\u4e70\u4e86\uff0c\u8fd8\u4e0d\u4e60\u60ef\u81ea\u5df1\u7a7f\u7684\u6b63\u5f0f\u7684\u6837\u5b50\uff0c\u6708\u5e95\u53c8\u62db\u8058\u4f1a\u4e86\uff0c\u4e5f\u8fd8\u6ca1\u60f3\u597d\u6295\u54ea\u4e9b\u5de5\u4f5c\uff0c\u597d\u70e6\u607c\u554a\uff0c\u611f\u89c9\u5927\u5b66\u7ec8\u4e8e\u6709\u70b9\u5fd9\u4e86\u3002\u8fd9\u628a\u6211\u641e\u5f97\u4e0d\u77e5\u600e\u4e48\u662f\u597d\u4e86\u3002",
        "created": "2015-10-19 14:48:12",
        "updated": "2015-10-19 14:48:12",
        "type": 1,
        "comment_count": 0,
        "photoUrl": null,
        "photoThumbUrl": null,
        "user": {
            "id": 100059013,
            "name": "Reborn#",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20011\/s100059013.jpg?v=2"
        }
    }, {
        "id": 9238264,
        "user_id": 100122391,
        "notebook_id": 581019,
        "notebook_subject": "\u966a\u4f60\u5ea6\u8fc7\u6f2b\u957f\u5c81\u6708\u3002",
        "content": "\u8fd9\u4e2a\u7070\u8272\u7684\u771f\u7684\u771f\u7684\u5f88\u6f02\u4eae ",
        "created": "2015-10-19 14:47:32",
        "updated": "2015-10-19 14:47:32",
        "type": 2,
        "comment_count": 0,
        "photoUrl": "http:\/\/s.timepill.net\/s\/w640\/photos\/2015-10-19\/5ydwo25y.jpg",
        "photoThumbUrl": "http:\/\/s.timepill.net\/s\/w240-h320\/photos\/2015-10-19\/5ydwo25y.jpg",
        "user": {
            "id": 100122391,
            "name": "\u4e22\u4e22.",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20024\/s100122391.jpg?v=122"
        }
    }, {
        "id": 9238262,
        "user_id": 100089136,
        "notebook_id": 570330,
        "notebook_subject": "Running Rae",
        "content": "\u9759\u4e0d\u4e0b\u6765\u554a\u554a\u554a\u554a\u554a",
        "created": "2015-10-19 14:47:19",
        "updated": "2015-10-19 14:47:19",
        "type": 1,
        "comment_count": 0,
        "photoUrl": null,
        "photoThumbUrl": null,
        "user": {
            "id": 100089136,
            "name": "\u4e0d\u4e8c\u3002",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20017\/s100089136.jpg?v=18"
        }
    }, {
        "id": 9238261,
        "user_id": 100141782,
        "notebook_id": 565845,
        "notebook_subject": "\u77ed\u6682\u7684\u8fdc\u5f81",
        "content": "\u89c9\u5f97\u4e0b\u9762\u4e0d\u5e94\u8be5\u914d\u9ed1\u8272\u5c0f\u811a\u88e4\uff0c\u89c9\u5f97\u725b\u4ed4\u88e4\u633a\u597d\u770b\u7684\u3002",
        "created": "2015-10-19 14:47:14",
        "updated": "2015-10-19 14:48:14",
        "type": 2,
        "comment_count": 2,
        "photoUrl": "http:\/\/s.timepill.net\/s\/w640\/photos\/2015-10-19\/l2oll8aw.jpg",
        "photoThumbUrl": "http:\/\/s.timepill.net\/s\/w240-h320\/photos\/2015-10-19\/l2oll8aw.jpg",
        "user": {
            "id": 100141782,
            "name": "\u51c9\u5c18\u68ee",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20028\/s100141782.jpg?v=2"
        }
    }, {
        "id": 9238260,
        "user_id": 100031938,
        "notebook_id": 571728,
        "notebook_subject": "\u5927\u4e8c \u4e0a",
        "content": "\u56f0=_= \u611f\u89c9\u5927\u5b66\u5c31\u662f\u60f3\u7761\u6b7b\u5728\u5e8a\u4e0a",
        "created": "2015-10-19 14:46:58",
        "updated": "2015-10-19 14:46:58",
        "type": 1,
        "comment_count": 0,
        "photoUrl": null,
        "photoThumbUrl": null,
        "user": {
            "id": 100031938,
            "name": "Cathy",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20006\/s100031938.jpg?v=12"
        }
    }, {
        "id": 9238259,
        "user_id": 100210299,
        "notebook_id": 581649,
        "notebook_subject": "\u70db\u5149\u6295\u5f71",
        "content": "\u6211\u662f\u4ec0\u4e48\u5473\u9053\u7684",
        "created": "2015-10-19 14:46:48",
        "updated": "2015-10-19 14:46:48",
        "type": 1,
        "comment_count": 0,
        "photoUrl": null,
        "photoThumbUrl": null,
        "user": {
            "id": 100210299,
            "name": "\u4e09\u4e24",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20042\/s100210299.jpg?v=2"
        }
    }, {
        "id": 9238258,
        "user_id": 100177215,
        "notebook_id": 577711,
        "notebook_subject": "\u6211\u8bf4",
        "content": "\u611f\u89c9\u54e6\n\u957f\u5f97\u6f02\u4eae\u7684\u5c0f\u59d1\u5a18\n\u90fd\u4f1a\u4e3b\u6301\u54e6\n\n\u597d\u591a\u7684\u6f02\u4eae\u5c0f\u59d1\u5a18\n\u7b80\u5386\u4e0a\u5199\uff1a\u4e3b\u6301",
        "created": "2015-10-19 14:46:26",
        "updated": "2015-10-19 14:47:44",
        "type": 1,
        "comment_count": 2,
        "photoUrl": null,
        "photoThumbUrl": null,
        "user": {
            "id": 100177215,
            "name": "\u9057\u843d\u4eba\u95f4",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20035\/s100177215.jpg?v=6"
        }
    }, {
        "id": 9238256,
        "user_id": 100056397,
        "notebook_id": 573515,
        "notebook_subject": "\u4f60\u5c31\u5f53\u521a\u8ba4\u8bc6\u7684\u7ec5\u58eb\u95f9\u4e86\u4e2a\u7b11\u8bdd",
        "content": "\u6211\u60f3\u56de\u5bb6\u8eba\u8eba \n\u7761\u51e0\u5929 \u6700\u8fd1\u4eba\u597d\u6d88\u6c89 \u8fc7\u5f97\u597d\u7d2f \n\u6700\u559c\u6b22\u7684\u65f6\u95f4\u662f\u65e9\u4e0a\u9192\u6765\u8fd8\u4e0d\u7528\u51c6\u5907\u4e0a\u73ed\u7684\u90a3\u5341\u51e0\u5206\u949f",
        "created": "2015-10-19 14:45:32",
        "updated": "2015-10-19 14:45:32",
        "type": 1,
        "comment_count": 0,
        "photoUrl": null,
        "photoThumbUrl": null,
        "user": {
            "id": 100056397,
            "name": "Player",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20011\/s100056397.jpg?v=11"
        }
    }, {
        "id": 9238254,
        "user_id": 100115261,
        "notebook_id": 510298,
        "notebook_subject": "\u3042\u306a\u305f",
        "content": "\u6211\u4e0d\u61c2\u81ea\u5df1 \u4e0d\u61c2\u4f60 \u4e0d\u61c2\u7231\u60c5 \u4e0d\u61c2\u751f\u6d3b",
        "created": "2015-10-19 14:45:02",
        "updated": "2015-10-19 14:45:02",
        "type": 1,
        "comment_count": 0,
        "photoUrl": null,
        "photoThumbUrl": null,
        "user": {
            "id": 100115261,
            "name": "\u5e73\u9759\u7684\u50cf\u4e2a\u77e5\u5df1",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/20023\/s100115261.jpg?v=4"
        }
    }, {
        "id": 9238253,
        "user_id": 9929,
        "notebook_id": 574376,
        "notebook_subject": "2015-09-27",
        "content": "\u6d6a\u8d39\u4e86\u4e24\u4e2a\u6708 \u65f6\u95f4\u548c\u91d1\u94b1 \u91cd\u5934\u5f00\u59cb \u5fc3\u91cc\u8fd8\u662f\u4f1a\u4e0d\u8212\u670d \u5f88\u4e0d\u8212\u670d",
        "created": "2015-10-19 14:44:47",
        "updated": "2015-10-19 14:44:47",
        "type": 1,
        "comment_count": 0,
        "photoUrl": null,
        "photoThumbUrl": null,
        "user": {
            "id": 9929,
            "name": "\u3000\u5b89\u62c9 \u3000",
            "iconUrl": "http:\/\/s.timepill.net\/user_icon\/1\/s9929.jpg?v=117"
        }
    }]
};

let menuItems = [
    {type: MenuItem.Types.SUBHEADER, text: '胶囊日记'},
    {route: '/', text: '首页'},
    {route: 'user', text: '提醒'},
    {route: 'notebooks', text: '日记本'},
    {type: MenuItem.Types.SUBHEADER, text: '张xx'},
    {route: 'get-started', text: '我的日记'},
    {route: 'get-started', text: '我的日记'},
    {
        type: MenuItem.Types.LINK,
        payload: '#/user',
        text: 'GitHub'
    }
];


module.exports = class HomePage extends BasePage {
    getClassName() {
        console.log(this)
        return 'HomePage';
    }
    showLeftNav() {
        console.log(this);
        this.refs.leftNav.toggle();
    }

    onTouchDiaryHeader(key, diary) {
        //alert(diary);
        window.location.href = '#/user';
    }


    render() {
        var diaries = diariesData.diaries;
        return (
            <div style={{position:"absolute", width: "100%", height: "100%", overflow:"hidden"}}>
                <AppBar
                    title="胶囊日记"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.showLeftNav.bind(this)}
                    iconElementRight={<IconButton><FontIcon className="muidocs-icon-action-home" /></IconButton>}
                    style={{ position:"absolute", width: "100%" }}
                    />
                <div style={{position:"absolute", width: "100%", height: "100%", overflow:"scroll"}}>
                    <div style={{ paddingTop:64 }}>
                        <DiaryList diaries={diaries} onTouchDiaryHeader={this.onTouchDiaryHeader}/>
                    </div>
                </div>
                <LeftNav ref="leftNav" docked={false} menuItems={menuItems}/>
            </div>
        );
    }
};
