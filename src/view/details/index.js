import React,{Component} from "react";
import {Avatar, Card} from "antd"
import data from "../index/data";
import TxtTag from "../txtTag";
import {Link} from "react-router-dom";

class Details extends  Component{
    // constructor(arg){
    //     super(arg);
    //     let id = this.props.match.params.id;
    //     this.getData(id);
    // }

    render(){
        const title = (<div>
            <h1>{data.data[2].title}</h1>
            <div style={{
                display:"flex",
                alignItems:"center"
            }}>

                <Avatar src={require('../../images'+data.data[2].img_url)}/>

                <TxtTag data={data.data[2]} />

                <Link to={"/user/"+data.data[2].author}>
                    {data.data[2].author}
                </Link>
            </div>
        </div>);
        return (
            <div>
                <Card title={title}>
                    <div>
                        {data.data[2].content}
                    </div>
                </Card>

            </div>

            )
    }
}
export default Details;