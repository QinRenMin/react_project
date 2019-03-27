import React,{Component} from "react";
import {Tag} from "antd";
const tag = {
  Top:{
      color:"red",
      txt:"置顶"
  },

  Html:{
      color:"blue",
      txt:"Html"
  },
    Css:{
        color:"yellow",
        txt:"Css"
    },
    Javascript:{
        color:"green",
        txt:"javascript"
    },
    React:{
        color:"purple",
        txt:"react"
    },
    Node:{
        color:"gray",
        txt:"node"
    }

};
function getTag(data) {
    return(data.Top ? "Top":data.tag)
}
export default class TxtTag extends Component{
    render(){
        // console.log(this.props.data);
        let nowTag = tag[getTag(this.props.data)];
        // console.log(nowTag);
        return <Tag color={nowTag.color}>{nowTag.txt}</Tag>
    }
}