import React from 'react';
import './Editor.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

import { Button } from 'antd';

class Editor extends React.Component {
  state = {
  }

  render() {
    return(
      <div className="editor">
        <Button style={{margin: "24px", marginBottom: "0px"}} shape="round" type="primary">NER</Button>
        <Button style={{margin: "24px", marginBottom: "0px"}} disabled="true" shape="round" type="primary">POS</Button>
        <div style={{margin: "32px", fontSize: "1.5em", wordSpacing: "0.3em", lineHeight: "1.9"}}>
          <CKEditor
              editor={ BalloonEditor }
              // config={{        
              //   toolbar: ['heading', '|', 'undo', 'redo', 'highlight'],
                
              // }} 
              data='<p>It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of   foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the   season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had   nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period   was so far like the present period, that some of its noisiest authorities insisted on its being received, for good   or for evil, in the superlative degree of comparison only.</p>'
              onInit={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor );
              } }
              onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  console.log( { event, editor, data } );
              } }
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor );
              } }
          />
        </div>
        
      </div>
    );
  }
}

export default Editor;