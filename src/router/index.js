import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "../view/index";
import About from "../view/about";
import Article from "../view/book";
import User from "../view/user";
import Details from "../view/details";

class RouterIndex extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/index/all" />
                )} />
                <Route path="/index" component = {Index}/>
                <Route path="/book" component = {Article}/>
                <Route path="/about" component = {About}/>
                <Route path="/user" component = {User}/>
                <Route path="/details" component = {Details}/>
            </Switch>
        )
    }
}
export  default RouterIndex;