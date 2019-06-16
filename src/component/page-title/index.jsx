import React from 'react'

class PageTitle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='row'>
                <div className="col-md-12">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PageTitle;