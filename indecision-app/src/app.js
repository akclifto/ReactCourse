/**
 * Component based JS app with React for Indecision-App 
 */

 /**
  * Parent that holds all the main components
 */
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'SkyNext has entered the chat'
        const options = ['thing one','thing two','thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {

    //with react components, render always be called.
    render() {

        return (

            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>

        );
    }

}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What would you like to do?</button>
            </div>

        );
    }
}

class Options extends React.Component {
    render() {
        // console.log(this.props.options);
        return (
            <div>
                {this.props.options.length}
                {
                    this.props.options.map((opt) => 
                    <p key={opt}>{opt}</p>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (

            <div>
                Nested Option component.
            </div>

        );
    }
}

class AddOption extends React.Component {
    render() {
        return (

            <div>
                <button>Add Options Button goes here</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));