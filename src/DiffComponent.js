import React, {Component, Fragment} from 'react';
import Diff from 'react-stylable-diff';
 
class DiffComponent extends Component {
  render() {
      return (
          <Fragment>        
      <Diff type="words"
        inputA="It was the worst of times"
                  inputB="It was the blurst of times" />
              
              <Diff type="chars"
        inputA="It was the worst of times"
                  inputB="It was the blurst of times" />            
        
              

        </Fragment>  
    );
  }
}

export default DiffComponent;