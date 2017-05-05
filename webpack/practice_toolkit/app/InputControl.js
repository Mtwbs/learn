let React = require('react');

class InputControl extends React.Component {
    //
    constructor (props) {
        //
        super(props);
        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        }
        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>Type something:
                <input onChange={this.handleChange} value={this.state.text} />
                <p>{this.state.text}</p>
            </div>
        );
    }
}

module.exports = InputControl;