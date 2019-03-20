import React, { Component } from 'react';
import RouterIndex from "./router";
import Footer from "./view/main_footer";
import MainHeader from "./view/main_header";
import "./view/index.css";
//放置公共部分的组件,页面的头部和页面底部

class App extends Component {
  render() {

    return (
      <div className="pageWrap">
          <RouterIndex/>
          <MainHeader/>
          <Footer/>
      </div>
    );
  }
}

export default App;
