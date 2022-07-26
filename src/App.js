import React  from 'react';
import "./App.css";
import { marked } from 'marked';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: `# React Markdown Previewer!
## This is a sub-heading...
### A eto

     
Or... wait for it... **_both!_**
        
And feel free to go crazy ~~crossing stuff out~~.

            
There's also [links](https://ashusingh.me), and
> Block Quote`,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="field-wrapper">
          <div className="column">
            <h3>Input</h3>
            <div className="mark-input">
            <textarea 
            id="editor"
            className="input"
            value={this.state.markdown}
            onChange={(e) => {
              this.updateMarkdown(e.target.value);
            }} 
            ></textarea></div>
          </div>
          <div className="column">
            <h3>Output</h3>
            <div
                id="preview"
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
          </div>
        </div>
      </header>
    </div>
    );
  }
}
