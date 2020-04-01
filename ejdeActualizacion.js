import React, {Component} from 'react'
import PropTypes from 'prop-types'
//creo una variable con 3 atributos
const ANIMAL_IMAGES = {
  cat:'https://goo.gl/PoQQXb',
  dolphin:'https://goo.gl/BbiKCd',
  panda:'https://goo.gl/oNbtoq'
}


class AnimalImage extends Component {
  //declaro state como src de ANIMAL_IMAGES
  state = {src: ANIMAL_IMAGES[this.props.animal] }
//SE EJECUTA CADA VEZ QUE ACTUALIZEN LAS PROPS OSEA CADA VEZ Q HAYA UN CAMBIO(ES DECIR CADA VEZ QUE APRETEN UN BOTON)
//se ejecuta aunque los valores que se reciban sean los mismo de antes
  componentWillReceiveProps (nextProps) {
    console.log('ComponentWillReceiveProps')
    console.log(nextProps)
    //para saber si los valores son iguales a los anteriores
    if(this.props.animal != nextProps.animal){
      console.log("cambiando!")
      this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})
    }
  }


  render(){
    console.log('-> render')
    return(
      <center>
        <div>
        //muestro el animal que se selecciono y q por eso esta en la props
          <p> Selected {this.props.animal}</p>
          <img
            alt={this.props.animal}
            src={this.state.src}
            width='250'
            />
        </div>
     </center>
    )
  }
}
//creo los tipos de valores que tiene AnimalImage, animal que es un array de nombres
AnimalImage.propTypes = {
  animal: PropTypes.oneOf(['cat','dolphin','panda'])
}
//PONGO COMO PREDETERMINADO EL PANDA PARA Q LA PRIMERA IMG QUE APAREZCA SEA LA DE EL
AnimalImage.defaultProps = {
  animal: 'panda'
}
//la etiqueta q llamo en App
class EjemplodeCiclodeAct extends Component {
  state = {animal: 'panda'}
  render (){
    return(
      <center>
        <div>
          <h4>Ciclo de actualizacion, ejemplo de: ComponentWillRecieveProps</h4>
          //genero el cambio de state a animal asignandole el q se seleccione
          <button onClick={() => this.setState({animal : 'panda'})}>
            panda
          </button>
          <button onClick={() => this.setState({animal : 'cat'})}>
            Cat
          </button>
          <button onClick={() => this.setState({animal : 'dolphin'})}>
            dolphin
          </button>
          <AnimalImage animal={this.state.animal}/>
        </div>
      </center>
    )
  }
}
//exporto el metodo o etiqueta para poder incluirla en el App
export default EjemplodeCiclodeAct;
