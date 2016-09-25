const React = require('react');

class DigitalClicker extends React.Component {
  constructor(){
    super();

    this.state = {
      timesClicked: 0,
    }
    
    this.clickTimeClicked = this.clickTimeClicked.bind(this);
  }
  clickTimeClicked() {
      this.setState({
        timesClicked: this.state.timesClicked+=1,
      })
    }
  render(){
    return <button onClick={this.clickTimeClicked}>{this.state.timesClicked}</button>
  }
}
module.exports = DigitalClicker;
