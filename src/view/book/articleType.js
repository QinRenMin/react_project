import {Button, Dropdown, Icon, Menu} from "antd"
import React,{Component} from "react"
const menu = (
    <Menu id="article_type">
        <Menu.Item>
            <Button className="t">Html</Button>
            <Button className="t">Css</Button>
            <Button className="t">Javascript</Button>
            <Button className="t">React</Button>
            <Button className="t">Node</Button>
        </Menu.Item>
    </Menu>
);
// function getType() {
//     let inputs= document.getElementsByClassName("t");
//
//     for(let i = 0; i < inputs.length; i++){
//         console.log(inputs[i]);
//     }
// }
export default class Type extends Component{
    constructor(props){
        super(props);
        this.state = {
            type:["Html","Css","Javascript","React","Node"]
        }
    }
    render(){
        return(
            <Dropdown overlay={menu}>
                <a href="#">
                    文章类型<Icon type="down" />
                </a>
            </Dropdown>
        )
    }
}