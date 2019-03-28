import React,{Component} from "react";
import {List,Avatar} from "antd";
import data from "./data";
import {Link} from "react-router-dom";
import TxtTag from "../txtTag"

//调用redux
import {connect} from "react-redux"
// import  arr from "../../images/bg1.jpg";
class IndexList extends Component {

    // constructor(props){
    //     super(props);
    //     let {tab} = this.props;
    //     this.state={
    //         page:1,
    //
    //         tab,
    //
    //     }
    // }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps);
    // }
    render() {
        // console.log(data);
        console.log(this.props);
        //首页需要的数据
        //loading data page tab
        // const {loadding,data} = this.props;
        return (

            <List
                dataSource = {data.data}
                loading = {false}
                renderItem = {(item) =>(<List.Item

                    actions = {[
                        "回复："+item.reply_count,
                        "访问："+item.visit_count
                        ]}
                >


                            <List.Item.Meta
                                 avatar={<Avatar src={require('../../images'+item.img_url)}/>}
                                 // avatar={<Avatar src={require("../../images/bg1.jpg")}/>}
                                 title ={

                                        <div>
                                            <TxtTag data={item}/>
                                            <Link to={"/details/"+item.id}>
                                                {item.title}
                                            </Link>
                                        </div>
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
export default connect(state=>state.list)(IndexList);