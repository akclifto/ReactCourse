/**
 * Component based JS app with React for Indecision-App 
 */

 /**
  * Parent that holds all the components
 */
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
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
                <h1>Indecision App</h1>
                <h2>SkyNext has entered the chat</h2>
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
        return (
            <div>
                Option Component here
                <Option />
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