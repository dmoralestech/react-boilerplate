import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Props } from '../interfaces/Props'
import { State } from '../interfaces/State'

export class About extends React.Component<Props, State> {
     public state: State
    public props: Props

    constructor(props: Props) {
        super(props)
    }
   public render() {
        return <h1>Hello from about</h1>
    }
}
