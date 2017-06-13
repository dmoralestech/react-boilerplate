import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { About } from './components/about'
import { Home } from './components/home'
import { Props } from './interfaces/Props'
import { State } from './interfaces/State'

export class App extends React.Component<Props, State> {
    public state: State
    public props: Props

    constructor(props: Props) {
        super(props)
        this.state = {
            view: <Home />,
        }
    }

    public render() {
            return (
                <div>
                    {this.state.view}
                </div>
            )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
)
