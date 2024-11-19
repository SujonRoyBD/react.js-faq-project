import React, { Component } from 'react';
import About from './../AboutUs/About';

class From extends Component {
  state={
    chanel:"",
    suscribe:"",
    TvVersion:"",
    catagory:"",
    Programming:"",
    Frelencing:"",
    Teaching:"",
    male:"",
    Female:"",
    checkbox:true
  }
  Control=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  CheakboxHandeler =(e)=>{
    checkbox:e.target.checked
  }
  render() {
    const{Chanel,suscribe,catagory,Programming,Frelencing,checkbox}=this.state
    return (
      <div className='mt-6 container'>
        <input type="text" name="chanel" placeholder='chanel name' className='w-[500px] border-2 ' onChange={this.Control}/><br />
        <input type="text"name="Suscriber" placeholder='Suscriber' className='w-[500px] border-2 'onChange={this.Control}/> <br />
        <input type="text"name="TvVersion" placeholder='chanel name' className='w-[500px] border-2 'onChange={this.Control}/> <br />
        <select name="catagory" id=""onChange={this.Control} className='w-[500px]'>
        <option name="Programming" value="Programming">select</option>
        <option name="Programming" value="Programming">Programming</option>
        <option name="Frelencing" value="Frelencing">Frelencing</option>
        <option name="Teaching" value="Teaching">Teaching</option>
        </select> <br />
      
       <input type="radio" name="male"onChange={this.Control} />
          <label htmlFor="gender">Male</label>
        
          <input type="radio" name="Female"onChange={this.Control} />
          <label htmlFor="gender">Female</label> <br />
          <input type="checkbox" name="checkbox" onChange={this.CheakboxHandeler} />
          <button className='bg-green-300'onClick={()=> console.log(this.state)}>suscribe</button>
       
      </div>
    );
  }
}

export default From;
