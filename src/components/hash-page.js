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
        //标签里不能是局部变量，比如<a />类型会是a，a类型不存在就会报错，但是写成 <this.a />就能通过
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