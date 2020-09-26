import React, { Component } from 'react';
import {JSFrame} from 'jsframe.js'

import WallpaperImg from './assets/wallpaper.jpg';
import FolderImg from './assets/macFolder.svg';
let jsFrame = new JSFrame();

class App extends Component {

  componentDidMount(){
    jsFrame.create({
      title: 'Resume',
      left: 20, top: 20, width: 320, height: 220,
      movable: true,
      resizable: true,
      appearanceName: 'yosemite',
      html: '<div id="my_element" style="padding:10px;font-size:12px;color:darkgray;">Contents of window</div>'
    }).show();
  }

  render() {
    return (
      <div className="wallpaper" style={{backgroundImage: `url(${WallpaperImg})`}}>
        <div></div>
        <Folder folderName='Projects'/>
        <Folder folderName='Resumes'/>
      </div>
    );
  }
}
export default App;

export class Folder extends Component{
  render(){
    const {folderName = 'Untitled'} = this.props
    return <div style={{height: 50, width: 50, display: 'flex', flexDirection:'column', alignItems: 'center', margin: 10, marginBottom: 25}}>
      <img src={FolderImg} alt='folder' />
      <p style={{fontSize: 10}} >{folderName}</p>
    </div>
  }
}