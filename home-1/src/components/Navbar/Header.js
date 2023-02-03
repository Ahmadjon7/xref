import './Header.css'

const Header =() =>{
    return (
        <>
            <header className="wrapper-header">
                <div className="container">
                    <nav className="wrapper-navbar">
                        <div className="burger">
                            <i className="fa-solid fa-bars"></i>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <ul className="wrapper-list">
                            <li className="wrapper-item">
                                <a href="#" className="wrapper-link">
                                    Why Xref
                                </a>
                            </li>
                            <li className="wrapper-item">
                                <a href="#" className="wrapper-link">
                                        Solutions
                                </a>
                            </li>
                            <li className="wrapper-item">
                                <a href="#" className="wrapper-link">
                                        Platform
                                </a>
                            </li>
                            <li className="wrapper-item">
                                <a href="#" className="wrapper-link">
                                    Resources
                                </a>
                            </li>
                            <li className="wrapper-item">
                                <a href="#" className="wrapper-link">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                        <div className="wrapper-links">
                            <div className="wrapper-sing">Sing in</div>
                            <div className="wrapper-demo">Request a demo</div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;