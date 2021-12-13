import { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.intro}</h1>
            </header>
        );
    }
}
