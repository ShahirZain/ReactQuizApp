import React from 'react';
import {BrowserRouter,NavLink} from 'react-router-dom'



const Child = (props) => (
  
  <div className='modal'>
    <ul>
       {
        props.val.map(({topic , route}) => <li key={route}> 
            <BrowserRouter>
              <div>
                <NavLink to={route}>{topic}</NavLink>
              </div>
            </BrowserRouter>
          </li>)
      }    
    </ul>
  </div>
)


class TestToBeGiven extends React.Component {

  state={
    flag: true,
    quiztopic:[
        {topic:"HTML" ,
        route:"/html" },
        {topic:"CSS",
        route:"/css"}
      ]
  }
  toggleHidden = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    const Topic = this.state.quiztopic;
    return (    
      <div>
        <BrowserRouter>
        <div>
          <NavLink to="/" onClick={this.toggleHidden}> JavaScript</NavLink> <br/>
          {!this.state.flag && <Child val={Topic}/>}
          <NavLink to="/"> react</NavLink>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



export default TestToBeGiven;  