const mui = require('material-ui');

class AppBar extends mui.AppBar {
  getStyles() {
    var styles = super.getStyles();
    styles.title.fontSize = 20;
    return styles;
  }
}

module.exports = AppBar;
