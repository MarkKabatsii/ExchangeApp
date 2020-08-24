import React from 'react';
import "./Footer.sass"

class Footer extends React.Component {

    render() {
        return (
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className="copyright">
                                <a href="/" className="copyright-link">
                                    <h4 className="copyright-title">2020 &copy; ExchangeApp</h4>
                                </a>
                                <p className="copyright-text"> All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/sitemap/" tooltip="Карта сайта">Site map</a></li>
                                        <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Map</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/contact" tooltip="Контакты">Contacts</a></li>
                                        <li><a href="/d">Careers</a></li>
                                        <li><a href="/p">Service Agreement</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="social d-flex justify-content-between align-items-center">
                                <div className="social-icon">
                                    <a href="https://www.facebook.com" className='social-link'>
                                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://www.twitter.com" className='social-link'>
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://www.instagram.com" className='social-link'>
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
