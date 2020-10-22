import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

import ListNotes from './components/listNotes';
import MarkdownInput from './components/MarkdownInput';

const App = () => {
    return(
      <div className ="container-fluid">
        <div className ="row">
          <div className ="col-md-3">
            {/* Button */}
            < ListNotes />
          </div>
          <div className="col-md-9">
            <div className="row justify-content-center">
              < MarkdownInput />
            </div>
          </div>
        </div>
      </div>
    );
  };

ReactDOM.render(<App />, document.querySelector("#root"));