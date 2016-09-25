const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.updateBirate = this.updateBirate.bind(this);
    this.updateResolution = this.updateResolution.bind(this);
  }


  updateBirate(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    });
  }
  
  updateResolution(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({},this.state.settings.video, {
        resolution: '720p',
      })
      }),
    });
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.updateBirate}>Bitrate</button>
        <button className='resolution' onClick={this.updateResolution}>Resolution</button>
      </div>
    );
  }
}
module.exports = YouTubeDebugger;
