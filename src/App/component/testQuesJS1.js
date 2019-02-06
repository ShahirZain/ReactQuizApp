import React, { Component } from 'react';

class testQues extends Component {
  render() {
    return (
      <div>
      <h3>Vocabulary Quiz I</h3>
  <form >

<p> Check the answer to each multiple-coice question, and click on the "Send Form" button to submit the information.</p>

<p>1. The word which means "house" is: <br/>
<input type="radio" name="1.The word which means house is" value="maison"/>maison<br/>
<input type="radio" name="1.The word which means house is" value="quatre"/>quatre<br/>
<input type="radio" name="1.The word which means house is" value="soleil"/>soleil<br/>
<input type="radio" name="1.The word which means house is" value="poisson"/>poisson<br/>
</p>

<p>2. The word which means "fish" is:<br/>
<input type="radio" name="2. The word which means fish is" value="maison"/>maison<br/>
<input type="radio" name="2. The word which means fish is" value="valise"/>valise<br/>
<input type="radio" name="2. The word which means fish is" value="soleil"/>soleil<br/>
<input type="radio" name="2. The word which means fish is" value="poisson"/>poisson<br/>
</p>

<p>3. The word which means "suitcase" is:<br/>
<input type="radio" name="3. The word which means suitcase is" value="renard"/>renard<br/>
<input type="radio" name="3. The word which means suitcase is" value="valise"/>valise<br/>
<input type="radio" name="3. The word which means suitcase is" value="soleil"/>soleil<br/>
<input type="radio" name="3. The word which means suitcase is" value="poisson"/>poisson<br/> </p>

<br/>
<br/>
<br/>
<br/> 
<input type="submit" value="Send Form"/>
<input type="reset" value="Clear Form"/>
</form>
      </div>
    );
  }
}

export default testQues;
