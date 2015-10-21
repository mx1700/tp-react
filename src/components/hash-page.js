/**
 * Created by lizhaoguang on 15/10/21.
 */

import React from 'react'
import NavPage from './nav-page.js'
import warning from 'warning'

import HomePage from './home-page.js'
import UserPage from './user-page.js'

module.exports = class HashPage extends NavPage {

    static defaultProps = {
        routes: {
            '/home': HomePage,
            '/user': UserPage
        }
    };

    constructor(props) {
        super(props);
        this.state.page = this.getPage();
        if (this.state.page) {
            this.state = { pageStack: [<this.state.page />] };
        }
    }

    getPage() {
        //��ǩ�ﲻ���Ǿֲ�����������<a />���ͻ���a��a���Ͳ����ھͻᱨ������д�� <this.a />����ͨ��
        let routeName = window.location.hash.substr(1);
        return this.props.routes[routeName];
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            console.log(this.props);
            this.state.page = this.getPage();
            if (this.state.page) {
                console.log('push');
                this.pushPage(<this.state.page />);
            } else {
                warning(
                    false,
                    `route "${routeName}" not find`
                )
            }
        })
    }
};