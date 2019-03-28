import React,{Component} from "react";
import {Row,Avatar,Col} from "antd"
import data from "../index/data";
import UserList from "./userList";
export default  class User extends  Component{
    render(){
        return(
            <div className="wrap">
                <Avatar src={require('../../images'+data.data[2].img_url)} className = "userAvatar" />
                <Row className="userInfo">
                    <Col md={8}>
                        用户名:<a>{data.data[2].author}</a>
                    </Col>
                    <Col md={8}>
                        积分:<a>{data.data[2].score}</a>
                    </Col>
                    <Col md={8}>
                        文章总数:<a>{data.data[2].count}</a>
                    </Col>
                </Row>
                <UserList
                    loading={false}
                    title="最近创建的话题"
                    // data = {data.data[2].recent}
                />
            </div>
        )
    }
}