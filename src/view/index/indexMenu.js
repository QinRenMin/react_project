import React,{Component} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
class IndexMenu  extends Component{

    render(){
        let {mode,id} = this.props;
        return(
            <Menu id={id}
                  mode={mode}
            >
                <Menu.Item>
                    <Link to="/index/all">全部</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to="/index/study_html">HTML</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to="/index/study_css">CSS</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to="/index/study_JS">JavaScript</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to="/index/study_react">React</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to="/index/study_Node">Node</Link>
                </Menu.Item>
            </Menu>
        )
    }
}
export default IndexMenu;