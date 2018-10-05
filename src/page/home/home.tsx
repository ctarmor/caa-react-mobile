import * as React from 'react';
import logo from '../../image/logo.svg'


class Home extends React.Component {
    public render() {
        return (
            <div>
                <header>
                    <img src={logo} alt="logo" />
                    <h1>Welcome to React</h1>
                </header>
                <p>
                    To get started, X edit <code>src/Home.tsx</code> and save to reload.
                </p>
                <a href="/feeds/999">Feeds</a>
            </div>
        );
    }
}

export default Home;
