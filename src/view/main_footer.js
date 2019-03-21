import React,{Component} from "react";
import 'antd/dist/antd.css';
import {Layout} from 'antd';
class MainFooter extends Component{
    render(){
        return(
            //使文字居中显示
            <Layout.Footer style={{textAlign:"center"}}>
                版权归个人所有
            </Layout.Footer>
            )
    }
}
export default MainFooter;