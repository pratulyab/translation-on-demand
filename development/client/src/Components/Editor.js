import React from 'react';
import './Editor.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

import { Button } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

function ShowTranslation(props) {
  const showTranslation = props.showTranslation;
  if (showTranslation) {
    return(
      <div style={{marginTop: "32px"}}>
        <Title level={2}>Translation Editor</Title>
        <div style={{margin: "32px", fontSize: "1.5em", wordSpacing: "0.3em", lineHeight: "1.9"}}>
            <CKEditor
                editor={ BalloonEditor }
                // config={{        
                //   toolbar: ['heading', '|', 'undo', 'redo', 'highlight'],
                  
                // }} 
                data='<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod suscipit posuere. Proin consectetur magna eget tellus eleifend, interdum viverra risus hendrerit. Sed vehicula ex tellus, ac hendrerit quam lacinia sed. Duis tempor lacus vitae consectetur dapibus. Sed mattis tempor tincidunt. Proin feugiat risus leo, vel commodo velit malesuada at. Fusce a ligula nisi. Sed sit amet feugiat erat, gravida tempus massa. Praesent eros lectus, pulvinar id porttitor vel, bibendum eget ante. Aliquam vel vehicula leo. Sed interdum tellus quis ipsum sollicitudin dignissim. Donec eu aliquam mauris. Donec scelerisque urna elit. Fusce arcu libero, euismod ac massa imperdiet, varius ullamcorper sapien. Curabitur feugiat mauris in lacus finibus scelerisque. Fusce sollicitudin ipsum vel porttitor tristique.</p>'
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
  return <div></div>;
}

const normalText = '<p>It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of   foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the   season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had   nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period   was so far like the present period, that some of its noisiest authorities insisted on its being received, for good   or for evil, in the superlative degree of comparison only.</p>';

const nerText = '<p>It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of <mark class="marker-green">Light</mark>, it was the season of <mark class="marker-green">Darkness</mark>, it was the spring of hope, it was the winter of despair, we had everything before us, we had   nothing before us, we were all going direct to <mark class="marker-green">Heaven</mark>, we were all going direct the other way—in short, the period   was so far like the present period, that some of its noisiest authorities insisted on its being received, for good   or for evil, in the superlative degree of comparison only.</p>';

const posText = '<p><mark class="marker-green">It</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-pink">best</mark> of <mark class="marker-green">times</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-pink">worst</mark> of <mark class="marker-green">times</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-green">age</mark> of <mark class="marker-green">wisdom</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-green">age</mark> of <mark class="marker-green">foolishness</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-green">epoch</mark> of <mark class="marker-green">belief</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-green">epoch</mark> of <mark class="marker-green">incredulity</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-green">season</mark> of <mark class="marker-green">Light</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-green">season</mark> of <mark class="marker-green">Darkness</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-green">spring</mark> of <mark class="marker-green">hope</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">it</mark> <mark class="marker-yellow">was</mark> the <mark class="marker-green">winter</mark> of <mark class="marker-green">despair</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">we</mark> <mark class="marker-yellow">had</mark> <mark class="marker-green">everything</mark> before <mark class="marker-green">us</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">we</mark> <mark class="marker-yellow">had</mark> <mark class="marker-green">nothing</mark> before <mark class="marker-green">us</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">we</mark> <mark class="marker-yellow">were</mark> all <mark class="marker-yellow">going</mark> <mark class="marker-pink">direct</mark> to <mark class="marker-green">Heaven</mark> <mark class="marker-blue">,</mark> <mark class="marker-green">we</mark> <mark class="marker-yellow">were</mark> all <mark class="marker-yellow">going</mark> <mark class="marker-pink">direct</mark> the <mark class="marker-pink">other</mark> <mark class="marker-green">way</mark> <mark class="marker-blue">-</mark> in <mark class="marker-pink">short</mark> <mark class="marker-blue">,</mark> the <mark class="marker-green">period</mark> <mark class="marker-yellow">was</mark> so far like the <mark class="marker-pink">present</mark> <mark class="marker-green">period</mark> <mark class="marker-blue">,</mark> that some of <mark class="marker-pink">its</mark> <mark class="marker-pink">noisiest</mark> <mark class="marker-green">authorities</mark> <mark class="marker-yellow">insisted</mark> on <mark class="marker-pink">its</mark> <mark class="marker-yellow">being</mark> <mark class="marker-yellow">received</mark> <mark class="marker-blue">,</mark> for <mark class="marker-pink">good</mark> or for <mark class="marker-green">evil</mark> <mark class="marker-blue">,</mark> in the <mark class="marker-green">superlative</mark> <mark class="marker-green">degree</mark> of <mark class="marker-green">comparison</mark> only <mark class="marker-blue">.</mark> </p>';

class Editor extends React.Component {
  state = {
    showTranslation: false,
    normalDisabled: true,
    nerDisabled: false,
    posDisabled: false,
    currentEdit: normalText
  }

  render() {
    return(
      <div className="editor">

        <Button onClick={(event) => this.setState({currentEdit: normalText, nerDisabled: false, posDisabled: false, normalDisabled: true})} style={{margin: "24px", marginBottom: "0px"}} disabled={this.state.normalDisabled} shape="round" type="primary">Normal</Button>
        <Button onClick={(event) => this.setState({currentEdit: nerText, nerDisabled: true, posDisabled: false, normalDisabled: false})} style={{margin: "24px", marginBottom: "0px"}} disabled={this.state.nerDisabled} shape="round" type="primary">NER</Button>
        <Button onClick={(event) => this.setState({currentEdit: posText, nerDisabled: false, posDisabled: true, normalDisabled: false})} style={{margin: "24px", marginBottom: "0px"}} disabled={this.state.posDisabled} shape="round" type="primary">POS</Button>

        <div style={{marginLeft: "50%", display: "inline-block"}}>
          <Button>Save</Button>
          <Button>Export</Button>
        </div>
       
        <div style={{margin: "32px", fontSize: "1.5em", wordSpacing: "0.3em", lineHeight: "1.9"}}>
          <CKEditor
              editor={ BalloonEditor }
              // config={{        
              //   toolbar: ['heading', '|', 'undo', 'redo', 'highlight'],
                
              // }} 
              data={this.state.currentEdit}
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
          
        <Button onClick={(event) => this.setState({showTranslation: !this.state.showTranslation})} style={{margin: "24px", marginBottom: "0px"}} shape="round" type="primary">Show Rough Translation</Button>
        <ShowTranslation showTranslation={this.state.showTranslation}/>
      </div>
    );
  }
}

export default Editor;