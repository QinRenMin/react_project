import React,{Component} from "react"
import {Card,List,Avatar} from "antd"
import  {Link} from "react-router-dom"
import data from "../index/data";

export default class UserList extends Component {
    render() {
        let {loading, title, data} = this.props;
        return (
            <Card
                loading={loading}
                title={title}
                type={"inner"}
            >
                <List
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <Avatar src={require('../../images'+item.img_url)}/>
                            <Link to={"/user/" + item.author} className="userName">"aaa"</Link>
                            <h4><Link to={"/details/" + item.id}>{item.title}</Link></h4>
                            <time>最后回复时间:{item.last_reply_at.split("T")[0]}</time>
                        </List.Item>
                    )}
                >
                </List>
            </Card>
        )
    }
}