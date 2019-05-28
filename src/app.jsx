import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import './index.scss'

let name = ''
let names = ['tom', 'jerry','hhh']
let template1 = <div> {name} world</div>
let template2 = (
    <div>
        {
            name?<p>{name} world ~~~</p> : <p>this world</p>
        }
    </div>
)
let template3 = (
    <div>
        {
            names.map((x, index) => <p key={index}>this is {x}</p> )
        }
    </div>
)

// class Component2 extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     handClick(){
//         this.props.changeColor('yellow')
//     }
//     render() {
//         return <div>parent color is  {this.props.color}
//                     <button onClick={(e) => {this.handClick(e)}}>child onClick</button>
//                 </div>
//     }
// }

// class ESComponnet extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             name: 'ES6',
//             age: 18,
//             color:'red'
//         }

//         // this.handClick = this.handClick.bind(this) //绑定方法到this身上
//     }
//     handClick(color){
//         console.log('this', this)
//         this.setState({
//             color: color
//         })
//     }
//     render(){

//         return (
//             <div style={{backgroundColor: this.state.color}}>
//                 <Component2 bgColor={this.state.color} changeColor={(color)=>{this.handClick(color)}}>
//                     <span>span1</span>
//                     <a href="">aaaaa</a>
//                 </Component2>
//                 <h2>this is {this.state.name} Component</h2>
//                 <h1>age: {this.state.age}</h1>
//             </div>
//         )
//     }
// }

//组件之间传值
class Component1 extends React.Component{
    constructor(props){
        super(props)
    }
    handClick(){
        this.props.changeColor('yellow')
    }
    render() {
        return <div>parent color is  {this.props.color}
                    <button onClick={() => {this.handClick()}}>child1 onClick change to yellow</button>
                </div>
    }
}
class Component2 extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return <div style={{backgroundColor:this.props.bgColor2}}>parent color is  {this.props.bgColor2}
                </div>
    }
}
class ESComponnet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color:'red'
        }
    }
    handClick(color){
        console.log('this', this)
        this.setState({
            color: color
        })
    }
    render(){

        return (
            <div>
                <Component1 changeColor={(color) => {this.handClick(color)}}/>
                <Component2 bgColor2={this.state.color}/>
            </div>
        )
    }
}

ReactDOM.render(
    <ESComponnet name="Helen"/>,
    document.getElementById('app')
);