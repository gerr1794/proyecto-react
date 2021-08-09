import React from 'react'

class ItemCount extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        contador:1
    }
    }

    agregar() {
    this.setState({contador:this.state.contador+1})
    }
    quitar() {
    let contador = this.state.contador
    if(contador>1) {
        this.setState({contador:contador-1})
    }
    }
    render() {
    return (
        <div>
        <h3>Fernet Branca 750ml</h3>
        <h3>{this.state.contador}</h3>
        <input type="button" onClick={this.agregar.bind(this)} value="Agregar" />
        <input type="button" onClick={this.quitar.bind(this)} value="Quitar" /><br></br><br></br>
        <input type="button" value="Agregar al carrito" />
        </div>
    )
}

}
export default ItemCount;