import { Component } from "react";
import './card.styles.css'

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <img alt={`monster ${this.props.name}`}
                    src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`} />
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
            </div>
        );
    }
}

export default Card;