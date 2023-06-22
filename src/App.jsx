// import { createStore } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import { Provider, connect } from 'react-redux'
import './App.css'

// Definir el estado inicial

const initialState = {
  count: 0
}

// Definir un reducer que actualice el estado

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      if (state.count > 0){

        return { count: state.count - 1 }
      }
      default:
        return state
  }

}

// Crear el store de Redux

const store = createStore(reducer)



const Counter = ({count, increment, decrement}) => {
  return (
    <>
      <h3>Contador: <span>{count}</span></h3>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </>
  )
}

// Mapear el estado y las acciones al componente

const mapStateToProps = (state) =>{

      return {
        count: state.count
      }

}

const mapDispatchToProps = (dispatch) =>{
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}


// Conectar el componente al STORE de Redux
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)





function App() {


  return (
    <>
      <Provider store={store}>
        <ConnectedCounter/>
      </Provider>

    </>
  )
}

export default App
