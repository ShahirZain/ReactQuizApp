import React, { Component } from 'react';
import './testQuesJS1.css';

class testQues extends Component {
  render() {
    return (
      <div>
        <div className="header">
        <header>
          <h3>JavaScript Quiz 1</h3>
        </header>
        </div>
        <form >

          <p className="text">1. Inside which HTML element do we put the JavaScript? <br/> <br />
              <input type="radio" className="opt" name="q11" value="<script/>" /> &lt;script/&gt;<br />
              <input type="radio" className="opt" name="q12" value="<js>" /> &lt;js/&gt;<br />
              <input type="radio" className="opt" name="q13" value="<scripting/>" />&lt;scripting/&gt; <br />
              <input type="radio" className="opt" name="q14" value="<javascript>" /> &lt;javascript/&gt;<br />
          </p>

          <p className="text">2. What is the correct JavaScript syntax to change the content of the HTML element below?
            <br/>
            &lt;p id="demo"&gt;This is a demonstration. &lt;/p&gt;:<br />
              <input type="radio" className="opt" name="2. The word which means fish is" value="maison" /> document.getElementByName("p").innerHTML = "Hello World!";<br />
              <input type="radio" className="opt" name="2. The word which means fish is" value="valise" /> document.getElement("p").innerHTML = "Hello World!";<br />
              <input type="radio" className="opt" name="2. The word which means fish is" value="soleil" /> document.getElementById("demo").innerHTML = "Hello World!";<br />
          </p>

          <p className="text">3. Where is the correct place to insert a JavaScript?<br />
              <input type="radio" className="opt" name="3. The word which means suitcase is" value="renard" /> The &lt;head&gt; section <br />
              <input type="radio" className="opt" name="3. The word which means suitcase is" value="valise" /> Both the &lt;head&gt; section and the &lt;body&gt; section are correct<br />
              <input type="radio" className="opt" name="3. The word which means suitcase is" value="soleil" /> The &lt;body&gt; section<br />
           </p> 
           <input type="submit" value="Submit"  className="submit"/>
        </form>
      </div>
    );
  }
}

export default testQues;
