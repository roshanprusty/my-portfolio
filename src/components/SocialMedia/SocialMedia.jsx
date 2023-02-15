import './SocialMedia.css';
function SocialMedia() {
    return (
        <div id="sidebar">
            <div className="social facebook">
                <a href=" https://www.facebook.com " target="_blank">
                    <p>Like on Facebook <i className="fa fa-facebook " /> </p>
                </a>
            </div>
            <div className="social twitter">
                <a href=" https://www.twitter.com " target="_blank">
                    <p>Follow on Twitter<i className="fa fa-twitter" /> </p>
                </a>
            </div>
            <div className="social google">
                <a href=" https://www.plus.google.com " target="_blank">
                    <p>&nbsp;Add on Google+<i className="fa fa-google-plus" /> </p>
                </a>
            </div>
            <div className="social youtube">
                <a href=" https://www.youtube.com " target="_blank">
                    <p>Subscribe on Youtube<i className="fa fa-youtube-play" /> </p>
                </a>
            </div>
            <div className="social linkedin">
                <a href=" https://www.linkedin.com " target="_blank">
                    <p>Connect on LinkedIn<i className="fa fa-linkedin" /> </p>
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;