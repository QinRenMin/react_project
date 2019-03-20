import React,{Component} from "react";
//使用antd 中的layout布局
import 'antd/dist/antd.css'
import {Layout,Row,Col,Divider,Icon,Dropdown,Button} from "antd";
//使用Link,实现菜单导航跳转页面
import Nav from "./nav";
class MainHeader extends Component{
    render(){
        return(
            <Layout.Header>
                <Row className="wrap">
                    <Col md={8} xs={24}>
                        <h1 id="logo">my_study</h1>
                    </Col>
                    <Col md={16} xs={0}>
                        <Divider className="headerDivider" type="vertical"/>
                       <Nav id="nav"
                            mode = "horizontal"
                       />
                    </Col>
                    <Col md={0} xs={24}　className="xsNav">
                        <Dropdown overlay={
                            <Nav
                                id="xsNav"
                                mode={"vertical"}
                            />
                        }>
                            <Button typeof="bars">下拉菜单</Button>
                        </Dropdown>
                        下拉菜单</Col>
                </Row>
            </Layout.Header>

        )
    }
}
export default MainHeader;