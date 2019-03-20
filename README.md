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
###添加路由
新建router文件
   1.在该目录下建立index.js 
   
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
   
   