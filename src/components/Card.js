import { BiCurrentLocation } from "react-icons/bi";

export default function Card(props) {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" src={props.imageUrl} alt={props.title} />
            </div>
            <div className="card-info">
                <BiCurrentLocation className="card-icon" />
                <h2 className="card-location">{props.location}</h2>
                <a className="card-location-url" onClick={() => openInNewTab(props.googleMapsUrl)}>
                    View on Google Maps
                </a>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="card-description">{props.description}</p>
            </div>
        </div >
    );
}