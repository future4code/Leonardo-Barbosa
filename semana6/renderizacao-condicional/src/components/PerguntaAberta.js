import React from 'react'


export class PerguntaAberta extends React.Component {
    
    render(){
        return(
            <div>
                <p>{this.props.pergunta}</p>
                <input onChange={this.onChange} value={this.props.value}/>
            </div>
    )
}}

export default PerguntaAberta