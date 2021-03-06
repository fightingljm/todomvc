import React from 'react';

class TodoList extends React.Component {
  render(){
    // console.log(this.props);
    // let list = this.props.data.map((item,index) =>
    //   <li key={Math.random()}>
    //     <input type='checkbox' className='pull-left' defaultChecked={item.completed} onChange={()=> this.props.handleCompleted(index)}></input>
    //
    //     <span style={{textDecoration: item.completed ? 'line-through' : 'none',color: item.completed ? '#ccc' : '#000'}}>{item.text}</span>
    //
    //     <span className="glyphicon glyphicon-remove-circle pull-right" aria-hidden="true" style={{color:'red'}} onClick={()=> this.props.handleRemove(index)}></span>
    //
    //   </li>)
    let list = this.props.data.map(item=>
      <li key={item.id}>
        <input type='checkbox' className='pull-left' defaultChecked={item.completed} onChange={()=> this.props.handleCompleted(item.id)}></input>

        <span style={{textDecoration: item.completed ? 'line-through' : 'none',color: item.completed ? '#ccc' : '#000'}}>{item.text}</span>

        <span className="glyphicon glyphicon-remove-circle pull-right" aria-hidden="true" style={{color:'red'}} onClick={()=> this.props.handleRemove(item.id)}></span>

      </li>)
    return(
      <ul>
        {list}
      </ul>
    )
  }
}

export default TodoList;
