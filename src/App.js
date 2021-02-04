import logo from './logo.svg';
import './App.css';
import React from 'react'
// import { ReactComponent } from '*.svg';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      info:"",
      data:[]
    }
  }

  getText=(event)=>{
    this.setState({
      info:event.target.value
    })
  }

  storeData=(eventStore)=>{
    eventStore.preventDefault();
    this.setState({
      data:[...this.state.data,this.state.info]
    })
  }

  deleteItem=(eventDelete)=>{
    var testData=this.state.data;
    if(window.confirm("Are you sure ?")==true){
      testData.splice(Number(eventDelete.target.name),1)
    this.setState({
      data:testData
    })
    }
    
  }

  render(){
    // console.log(this.state.data)
  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <form>
                <input type="text" className="form-control" placeholder="Add data" onKeyUp={e=>{this.getText(e)}} />
                <button className="btn btn-primary" onClick={e1=>this.storeData(e1)}> Add </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <ul className="list-group">
                  {this.state.data.map((item,index)=>(
                    <li className="list-group-item" key={index}> {item}  <button type="button" name={index} onClick={e2=>{this.deleteItem(e2)}}> delete </button></li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }
}


export default App;
