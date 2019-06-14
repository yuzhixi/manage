// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

// import './index.css'
// import './index.scss'

// let name = ''
// let names = ['tom', 'jerry','hhh']
// let template1 = <div> {name} world</div>
// let template2 = (
//     <div>
//         {
//             name?<p>{name} world ~~~</p> : <p>this world</p>
//         }
//     </div>
// )
// let template3 = (
//     <div>
//         {
//             names.map((x, index) => <p key={index}>this is {x}</p> )
//         }
//     </div>
// )

// // class Component2 extends React.Component{
// //     constructor(props){
// //         super(props)
// //     }
// //     handClick(){
// //         this.props.changeColor('yellow')
// //     }
// //     render() {
// //         return <div>parent color is  {this.props.color}
// //                     <button onClick={(e) => {this.handClick(e)}}>child onClick</button>
// //                 </div>
// //     }
// // }

// // class ESComponnet extends React.Component{
// //     constructor(props){
// //         super(props)
// //         this.state = {
// //             name: 'ES6',
// //             age: 18,
// //             color:'red'
// //         }

// //         // this.handClick = this.handClick.bind(this) //绑定方法到this身上
// //     }
// //     handClick(color){
// //         console.log('this', this)
// //         this.setState({
// //             color: color
// //         })
// //     }
// //     render(){

// //         return (
// //             <div style={{backgroundColor: this.state.color}}>
// //                 <Component2 bgColor={this.state.color} changeColor={(color)=>{this.handClick(color)}}>
// //                     <span>span1</span>
// //                     <a href="">aaaaa</a>
// //                 </Component2>
// //                 <h2>this is {this.state.name} Component</h2>
// //                 <h1>age: {this.state.age}</h1>
// //             </div>
// //         )
// //     }
// // }

// //兄弟组件之间传值和状态提升

// // class Component1 extends React.Component{
// //     constructor(props){
// //         super(props)
// //     }
// //     handClick(){
// //         this.props.changeChild2Color('yellow')
// //     }
// //     render() {
// //         return <div> child1, parent color is  {this.props.color}
// //                     <button onClick={() => {this.handClick()}}>child1 onClick change child2 color to yellow</button>
// //                 </div>
// //     }
// // }
// // class Component2 extends React.Component{
// //     constructor(props){
// //         super(props)
// //     }
// //     render() {
// //         return <div style={{backgroundColor:this.props.bgColor2}}>child2, parent color is  {this.props.bgColor2}
// //                 </div>
// //     }
// // }

// // class ESComponnet extends React.Component{
// //     constructor(props){
// //         super(props)
// //         this.state = {
// //             color:'red'
// //         }
// //     }
// //     onHandClick(color){
// //         console.log('this', this)
// //         this.setState({
// //             color: color
// //         })
// //     }
// //     render(){

// //         return (
// //             <div>
// //                 <Component1 changeChild2Color={(color) => {this.onHandClick(color)}}/>
// //                 <Component2 bgColor2={this.state.color}/>
// //             </div>
// //         )
// //     }
// // }

// class A extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (

//             <div>
//                 Component A
//                 <Switch>
//                     <Route exact path={`${this.props.match.path}/sub`} 
//                         render={(route)=>{
//                             return <div>组件sub</div>
//                         }}
//                     />
//                     <Route exact path={`${this.props.match.path}/:id`} 
//                         render={(route)=>{
//                             return <div>带参数的A，参数是：{route.match.path.id}</div>
//                         }}
//                     />
//                     <Route path={`${this.props.match.path}`} 
//                         render={(route)=>{
//                             return <div>不带参数的A</div>
//                         }}
//                     />
//                 </Switch>
//             </div>
//         )
//     }
// }

// class B extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return <div>Component B</div>
//     }
// }
// class Wrapper extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (
//         <div>
//             <Link to='/a'>组件a</Link>
//             <br/>
//             <Link to='/a/123'>带参数组件a</Link>
//             <br/>
//             <Link to='/a/sub'>组件sub</Link>
//             <br/>
//             <Link to='/b'>组件b</Link>
//             {this.props.children}
//         </div>
//         )
//     }
// }


// ReactDOM.render(
//     <Router>
//         <Wrapper>
//             <Route path="/A" component={A}/>
            
//             <Route path="/B" component={B}/>
//         </Wrapper>
//     </Router>,
    
//     document.getElementById('app')
// );