import React ,{Component} from 'react';
import {BrowserRouter,NavLink,Switch,Route} from 'react-router-dom';
import TestQues from './testQuesJS1'
import history from './history'

class testKey extends Component {
    state={
        temp: "",
        key : "",
        flag : false
    }

    temp = (event) =>{
        this.setState({
            temp : event.target.value
        })
    }

    submit = () =>{
        this.setState({
            key : this.state.temp   
        }, () =>{
            console.log(this.state.key)
            if(this.state.key === "abc"){
                    this.setState(
                        {
                            flag : !this.state.flag
                        }
                    )
            }
        } )
    }    
    render() {
      return (
        <div>
            <input type="text" name="Key" onChange={this.temp} value={this.state.temp}/>  
            <BrowserRouter>
                <span>
                    <NavLink to=""><input type="button" value="Submit" onClick={(e)=>this.submit(e)}/></NavLink>                    
                </span>
            </BrowserRouter>
            {
                this.state.flag ? 
                    <Switch>
                        <Route exact path="" component={TestQues}/>
                    </Switch>
                    : null
            }
        </div>
      );
    }
  }
  
  export default testKey;
  