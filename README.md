# React项目开发
### 一：环境配置
 1.创建项目　
 
 ```create-react-app  my_study```　
 
2.查看是否成功创建　

```npm start```　

3.安装redux　

```npm i redux -S```或者
```yarn add redux```

4.整合react和redux　

```npm i react-redux -S```或者
```yarn add react-redux```

5.安装中间件，实现异步更新　

```npm i redux-thunk -S```或者
```yarn add redux-thunk```

6.安装路由

```npm i react-router-dom -S```或者
```yarn add react-router-dom```

7.安装axios组件，数据库请求

```npm i axios -S```或者
```yarn add axios```

8.安装antd

```npm i antd -S``` 或者
```yarn add antd```

9.修改配置环境，适应antd

```npm i react-app-rewired -D```

```npm i babel-plugin-import -D```

### 视图划分
新建view文件

    划分为五个模块
    为index,about,details,book,user
### 添加路由
  1.新建router文件
   在该目录下建立index.js 
   
   导入 
   
   import {Switch,Route,Redirect} from "react-router-dom";
   ```
   <Switch>
            <Route path="/" exact render={()=>(
                          <Redirect to="/index/all" />
                      )} />
                      <Route path="/index" component = {Index}/>
                     
                  </Switch>
   ```
   2.在src文件使用HashRouter或者BrowserRouter
   ```
    <BrowserRouter>
           <App />
       </BrowserRouter>
   ``` 
   3.在App.js中使用RouteIndex
  
   ```
   import RouterIndex from "./router";
    return (
         <div>
             <RouterIndex/>
   
         </div>
       );  
  ```
   
### 编写页面的头部和底部   
 头部:  
 1.使用antd的Layout布局     
     2.遇到了样式无法加载问题
    使用： 
   ```
        import 'antd/dist/antd.css
        import <Layout> from 'antd'
   ```
    有时候仅仅导入antd是没有效果的
  3.使用Row Col 
    利用md和xs设计响应布局
   ```
   <Col md={8} xs={24}>     </Col>
   <Col md={16} xs={0}>     </Col>
   ```
   4.使用Divider分割线
   ``` 
   <Divider type="vertical"/>
   ``` 
   
   5.使用Menu,制作菜单
   6.使用Icon,图标相关方面
   ```
   <Icon type="home"/>
   ```
   7.制作小屏幕下拉菜单
   ```Dropdown```　
   
   8.封装导航部分，放在组件里(nav.js)，传递参数，控制导航的方向问题　　
   
  尾部：　
   
  1.使用layout布局　
  
  2.利用弹性盒模型，将其放置在底部，并设置中间内容的显示问题
 
 ###编写首页
 1.内容组成 
 
   左侧导航以及右侧展示区 
   
 2.中间内容整体布局
   ```
   <Row>
          <Col md={8} xs={0}>左侧导航</Col>
          <Col md={16} xs={24}>右侧内容</Col>
   </Row>
   ```
  3.左侧导航实现
  ```
  <Menu>
    <Menu.Item><Link to=""></Menu.Item>
  </Menu>
设计相关样式　
 ```
   
   
 4.实现左侧导航在大小屏幕下响应式布局，并将其封装在indexMenu.js文件下．
 原理同nav.js. 
 nav.js
 ```
    import React,{Component} from "react";
    import {Menu} from "antd";
    import {Link} from "react-router-dom";
    class IndexMenu  extends Component{
    
        render(){
            let {mode,id} = this.props;
            return(
                <Menu id={id}
                      mode={mode}
                >
                    <Menu.Item>
                        <Link to="/index/all">全部</Link>
                    </Menu.Item>
                </Menu>
            )
        }
    }
    export default IndexMenu;
   ```
  在user/index.js下,实现响应布局
  ```
  <Col md={8} xs={0} className="indexSider">
     <IndexMenu id="indexMenu" mode="vertical"/>
   </Col>
  
  <Col md={0} xs={24} className="indexSider">
       <IndexMenu id="indexXsMenu" mode="horizontal"/>
  </Col>

 ```