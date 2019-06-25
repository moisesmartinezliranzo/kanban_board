import React from 'react'
import Card from './Card'

class List extends React.Component {
    render() {
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {
                    this.props.cards.map(card => (
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            tasks={card.tasks}
                        />
                    ))
                }
            </div>
        )
    }
}

export default List