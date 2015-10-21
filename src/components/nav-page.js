/**
 * Created by lizhaoguang on 15/10/21.
 */

import React from 'react'
import BasePage from './base-page.js'

module.exports = class NavPage extends BasePage {

    getClassName() {
        return "AppPage";
    }

    constructor(props) {
        super(props);
        this.state = { pageStack: [<props.defaultPage />] };
    }

    pushPage(page) {
        this.state.pageStack.push(page);
        this.forceUpdate();
        console.log(this.state.pageStack);
    }

    popPage() {
        this.state.pageStack.pop();
        this.forceUpdate();
        console.log(this.state.pageStack);
    }

    render() {
        console.log('render');
        console.log(this.state.pageStack);
        return (
            <div style={{ position:"absolute", width: "100%", height: "100%", overflow:"hidden" }}>
                {this.state.pageStack}
            </div>
        );
    }
};