import './App.css';
import { useState } from 'react';
import { marked } from 'marked';


function App() {

  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "Sergio",
    "lastName": "Vigil",
    "age": 20,
    "city": "Oviedo",
  }
  \`\`\`
  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      {/* Editor Area */}
      <div id="editor-container">
        <div id="editor-title">
          <h2>Editor</h2>
        </div>
        <div id="editor-box">
          <textarea id="editor" onChange={(event) => { setText(event.target.value);}} value={text}></textarea>
        </div>
      </div>
      {/* End of the Editor Area */}
      <div id="preview-container">
        <div id="preview-title"><h2>Preview</h2></div>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
      </div>
    </div>
  );
}

export default App;
