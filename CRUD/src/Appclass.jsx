import { Component } from 'react'

export default class Appclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: "",
         arr: []
      }

      this.addItem = this.addItem.bind(this)
      this.addTodo = this.addTodo.bind(this)
      this.updateTodo = this.updateTodo.bind(this)
      this.delTodo = this.delTodo.bind(this)
    }

    addItem = (e) => {
        let todo = e.target.value;
        this.setState({text: todo})
    }

    addTodo = () => {
        let existingTodo = this.state.arr;
        let todo = this.state.text
        let updatingTodo = [...existingTodo, todo]
        this.setState({ text: "", arr: updatingTodo})
    }
    updateTodo = (idx) => {
        let newTodo = prompt("Enter what you wanna do...")
        let updatedArr = [...this.state.arr]

        updatedArr[idx] = newTodo
        this.setState({arr: updatedArr})
    }
    delTodo = (idxe) => {
        let filteredArray = this.state.arr.filter((ele, idx) => idxe !== idx);
        this.setState({ arr: filteredArray });
    }
        
  render() {
    return (
      <div>
         <input
                    type="text"
                    placeholder="Type here"
                    className="textbox"
                    onChange={this.addItem}
                />
                <button onClick={this.addTodo}>Add Item</button>

                {this.state.arr.map((element, index) => (
                    <div key={index}>
                        <h1>{element}</h1>
                        <button onClick={() => this.updateTodo(index)}>Update</button>
                        <button onClick={() => this.delTodo(index)}>Delete</button>
                    </div>
                ))}
      </div>
    )
  }
}
