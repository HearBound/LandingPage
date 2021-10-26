import './TeamCard.css';

const TeamCard = (props) => {

return (
            <div className='card'>
                <img src={props.image}></img>
                <h4>{props.name}</h4>
                <p>{props.job}</p>
            </div>
    )
}

export default TeamCard;