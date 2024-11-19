import React, { Component } from 'react';

class Right extends Component {

constructor(props) {
  super(props)

  this.state = {
     changeValue:"e.targer.value"
  }
}

    handleOnchange=(e)=>{
    this.setState({
        changeValue:(e.target.value)
    });
}
    render() {
        return (
            <div>
             {/* <button className='bg-gray-600 text-white p-4 rounded-full hover:bg-green-600' onClick={this.handaleclick}>click more</button>  */}
             <input className='border-2' type="text" onChange={this.handleOnchange} />
             <p>{this.state.changeValue}</p>
            </div>
        );
    }

}
export default Right;