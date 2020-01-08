import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      msgContent:"",counter:props.maxChars
    };
  }

handleinput=event=>{
  this.setState({
    msgContent:event.target.value,counter:this.props.maxChars-event.target.value.length
  })
}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.msgContent} onChange={event=>this.handleinput(event)} />
        {this.state.counter}
      </div>
    );
  }
}

export default TwitterMessage;
