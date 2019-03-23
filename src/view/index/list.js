import React,{Component} from "react";
import {List,Avatar} from "antd";
import data from "./data";
import {Link} from "react-router-dom";
// import  arr from "../../images/bg1.jpg";
class IndexList extends Component {

    render() {
        console.log(data);
        return (

            <List
                dataSource = {data.data}
                loading = {false}
                renderItem = {(item) =>(<List.Item>

                            <List.Item.Meta
                                 avatar={<Avatar src={require('../../images'+item.img_url)}/>}
                                 // avatar={<Avatar src={require("../../images/bg1.jpg")}/>}
                                 title ={
                                     <h3>
                                         <Link to="/details">
                                        {item.title}
                                         </Link>
                                     </h3>
                                 }
                                description ={
                                     <p>
                                         <Link to="/user">
                                             {item.author}
                                         </Link>
                                         发表时间:{item.last_reply_at.split("T")[0]}
                                     </p>
                                 }

                            />



                </List.Item>)}

            >
            </List>
        )
    }
}
export default IndexList;