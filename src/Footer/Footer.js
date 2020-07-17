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
                                    <h1 className="copyright-title">2020 &copy; ExchangeApp</h1>
                                </a>
                                <p className="copyright-text"> All Rights Reserved</p>
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
                                        <li><a href="/contact/" tooltip="Контакты">Контакты</a></li>
                                        <li><a href="/d">Гарантии</a></li>
                                        <li><a href="/s">О сервисе</a></li>
                                        <li><a href="/o">Условия возврата</a></li>
                                        <li><a href="/p">Соглашение о использовании сервиса</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="social">
                                <p>facebook</p>
                                <p>twitter</p>
                                <p>instagram</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
