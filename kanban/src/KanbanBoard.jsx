import React from 'react'
import List from './List'

class KanBanBoard extends React.Component {
    render() {
        return (
            <div className="App">
                <List id='todo' title="To Do" cards={
                    this.props.cards.filter((card) => card.status === "todo")
                } />

                <List id='in-progress' title="In Progress" cards={
                    this.props.cards.filter((card) => card.status === "in-progress")
                } />

                <List id='done' title="Done" cards={
                    this.props.cards.filter((card) => card.status === "done")
                } />
            </div>
        )
    }
}

export default KanBanBoard