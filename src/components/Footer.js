import { GrGithub } from "react-icons/gr";

export default function Footer(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return(
    <footer className="footer">
        <small>
        Created by
        <a onClick={() => openInNewTab('mailto:rahilsheth05@gmail.com?')} className="footer-link"> Rahil Sheth</a>
        <GrGithub className="footer-icon" onClick={() => openInNewTab('https://github.com/RahilSheth12')}/>
        </small>
    </footer>
    );
}