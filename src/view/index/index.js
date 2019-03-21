import React,{Component} from "react";

import {Row,Col} from "antd";
import IndexMenu from "../user/indexMenu";

class Index extends  Component{
    render(){
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

                </Col>
            </Row>

        )
    }
}
export default Index;