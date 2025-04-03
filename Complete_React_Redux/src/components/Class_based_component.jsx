import { Component } from "react";


class ClassBasedComponent extends Component {

    // state
    state = {
        showText: false
    };

    handleClick = () => {
        this.setState({
            showText: !this.state.showText
        })
    };

    // componentDidMount
    // componentDidUpdate
    // componenetWillUnmount

    componentDidMount() {
        console.log('This is called first time on page load.')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Run on update", prevProps, prevState);
    }

    render() {

        console.log(this.state);

        return (
            <>
                {
                    this.state.showText ? <h1 className="text-white font-semibold font-mono text-2xl">Class Based Component</h1> : null
                }
                <button className="btn btn-secondary" onClick={this.handleClick}>Toggle Text</button>
            </>
        );
    };
};

export default ClassBasedComponent;
