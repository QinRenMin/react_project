import React,{Component} from 'react';
import {Icon, Menu} from "antd";
import {Link} from "react-router-dom";
class Nav extends Component{
    render(){
        let {mode,id} =this.props;
        return(
            <Menu
                id={id}
                mode={mode}
                theme="dark"
            >
                <Menu.Item>
                    <Link to="/index"><Icon type="home"/>首页</Link>
                </Menu.Item>

                <Menu.Item><Link to='/book'><Icon type="book" />文章</Link>
                </Menu.Item>
                <Menu.Item><Link　to='/about'><Icon type="question-circle" /> 关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}
export  default Nav;