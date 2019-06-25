import React from 'react'
import CheckList from './CheckList'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDetails: false
        }
    }

    handleToggleDetails() {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render() {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            )
        }

        return (
            <div className="card">
                <div
                    className={
                        this.state.showDetails ? "card__title card__title--is-open" : "card__title"
                    }
                    onClick={this.handleToggleDetails.bind(this)}>{this.props.title}
                </div>
                {cardDetails}
            </div>
        )
    }
}

export default Card