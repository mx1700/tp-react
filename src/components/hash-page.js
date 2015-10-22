/**
 * Created by lizhaoguang on 15/10/21.
 */

import React from 'react'
import NavPage from './nav-page.js'
import warning from 'warning'
import createHistory from 'history/lib/createHashHistory'
import HomePage from './home-page.js'
import UserPage from './user-page.js'

module.exports = class HashPage extends NavPage {

    static defaultProps = {
        routes: {
            '/':        HomePage,
            '/home':   HomePage,
            '/user':   UserPage
        }
    };

    constructor(props) {
        super(props);
        this.history = createHistory();
        this.keys = [];

        //this.state.page = this.getPage();
        //if (this.state.page) {
        //    this.state = { pageStack: [<this.state.page />] };
        //}
    }

    getPage(location) {
        //��ǩ�ﲻ���Ǿֲ�����������<a />���ͻ���a��a���Ͳ����ھͻᱨ������д�� <this.a />����ͨ��
        let routeName = location.pathname;
        return this.props.routes[routeName];
    }

    componentDidMount() {
        var unlisten = this.history.listen((location) => {
            console.log(location, location.key, this.keys);
            if (location.key == this.keys[this.keys.length - 2]) {
                this.keys.pop();
                this.popPage();
            } else {
                this.state.page = this.getPage(location);
                if (this.state.page) {
                    console.log('push');
                    this.keys.push(location.key);
                    this.pushPage(<this.state.page />);
                } else {
                    warning(
                        false,
                        `route "${location.pathname}" not find`
                    )
                }
            }

        });
    }
};