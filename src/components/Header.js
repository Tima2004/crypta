import Frame from '../components/imgs/Frame.png';
function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-line">
                    <div className="header-logo">
                    </div>

                    <div className="nav">
                        <a className="nav-item" href="#">ГЛАВНАЯ</a>
                        <a className="nav-item" href="#">ОБ АВТОРЕ</a>
                        <a className="nav-item" href="#">РАБОТЫ</a>
                        <a className="nav-item" href="#">ПРОЦЕСС</a>
                        <a className="nav-item scroll-to-massage" data-massage=".need-web-site" href="#">КОНТАКТЫ</a>
                    </div>

                    <div className="burger-menu">
                        <button id="burger">
                        </button>

                        <div id='menu' className="burger-slide disp">
                            <a className="nav-item block" href="#">ГЛАВНАЯ</a>
                            <a className="nav-item block" href="#">ОБ АВТОРЕ</a>
                            <a className="nav-item block" href="#">РАБОТЫ</a>
                            <a className="nav-item block" href="#">ПРОЦЕСС</a>
                            <a className="nav-item block scroll-to-massage" data-massage=".need-web-site" href="#">КОНТАКТЫ</a>
                        </div>

                    </div>
                </div>

                <div className="header-down">
                    <div className="header-frame">
                    <img className="img-frame" src={Frame} alt=""/>
                    </div>

                    <div className="header-info">
                        <div className="design-and-werst">
                            Дизайн и верстка
                        </div>

                        <div className="lorem-ipsum">
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и 
                            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов 
                            на латинице с начала XVI века.
                            
                        </div>

                        <div className="header-btn">
                            <a href="#" className="header-button">НАПИСАТЬ МНЕ</a>
                        </div>
                    </div>
                </div>
                
            </div> 
        </div>


        
    );
}

export default Header;