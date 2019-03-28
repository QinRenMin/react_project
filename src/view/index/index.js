import React,{Component} from "react";

import {Row,Col} from "antd";
import IndexMenu from "./indexMenu";
import IndexList from "./list";

class Index extends  Component{
    render(){
        let tab = this.props.location.pathname;
        return (
            <Row className="wrap">
                <Col md={8} xs={0} className="indexSider">
                   <IndexMenu
                       id="indexMenu"
                       mode="vertical"/>
                </Col>


                <Col md={0} xs={24} className="indexSider">
                    <IndexMenu
                        id="indexXsMenu"
                        mode="horizontal"/>
                </Col>
                <Col md={16} xs={24}
                     style={
                    {
                        height:"500px"
                    }
                }
                className="indexList"
                >
                    <IndexList
                        tab={tab}
                    />
                </Col>
            </Row>

        )
    }
}
export default Index;