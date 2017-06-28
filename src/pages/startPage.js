import React, { Component } from 'react';
import container from '../containers/pageContainer';

export class StartPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: props.store.user.firstName,
            lastName: props.store.user.lastName,
        };
    }

    render() {
        const user = this.props.store.user;
        console.log(this.props);
        return (
            <div>
                <p>Hello {user.firstName} {user.lastName}</p>
                <div>
                    <span>First Name</span>
                    <input type="text" value={this.state.firstName} onChange={(t) => this.setState({firstName: t.target.value})} />
                </div>
                <div>
                    <span>Last Name</span>
                    <input type="text" value={this.state.lastName} onChange={(t) => this.setState({lastName: t.target.value})} />
                </div>
                <div>
                    <button onClick={() => this.props.actions.setUserInfo({ firstName: this.state.firstName, lastName: this.state.lastName})}>Update</button>
                </div>
            </div>
        );
    }

}

export default container(StartPage);