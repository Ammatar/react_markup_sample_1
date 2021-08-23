const Footer = () => {
  return (
    <>
      <footer className="footer_container mar200">
        <div className="footer_menu between">
          <div className="mwidth15p">
            <h2>Easy Camper</h2> <h1>When Passion Meets Comfort.</h1>
          </div>
          <div className="footer_menu">
            <div className="footer_menu_block mwidth230px">
              <h3>Discover the Network</h3>
              <a href="/">Where to shop</a>
              <a href="/">Tour Guided</a>
              <a href="/">Our Tours</a>
              <a href="/">About Us</a>
            </div>
            <div className="footer_menu_block mwidth230px">
              <h3>Become a Manager</h3>
              <a href="/">Join your Pairing</a>
              <a href="/">Offer your Service</a>
              <a href="/">Are you a guide?</a>
            </div>
            <div className="footer_menu_block mwidth230px">
              <h3>Assistance</h3>
              <a href="/">Support Center</a>
              <a href="/">FAQs</a>
              <a href="/">Cancallation Options</a>
              <a href="/">Reliablity and Sequrity</a>
            </div>
          </div>
        </div>
        <div>
          <div className="line mar64">
            <span></span>
          </div>
          <div className="footer_flex between mar28">
            <div>EazyCamper. All rights reserved. </div>
            <div className="footer_flex minwidth400px between">
              <a href="/">About</a>
              <a href="/">Site Map</a>
              <a href="/">Terms</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Teams</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
