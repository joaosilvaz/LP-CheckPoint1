import './index.css'
import ragnarok from '../../assets/svg/ragnarok.svg'

function Footer(){
    return(
        <footer className='footer'>
            <div className='container'>
                <div className='logo-footer'>
                    <img src={ragnarok} alt="Ragnarok Logo" />
                </div>

                <div className='footer-columns-wrapper'>
                    <div className='footer-column'>
                        <span className='title-company'>COMPANY</span>
                        <p>About Us</p>
                        <p>Partnership</p>
                        <p>FAQ</p>
                    </div>

                    <div className='footer-column2'>
                        <span className='title-company'>COMPANY</span>
                        <p>About Us</p>
                        <p>Partnership</p>
                        <p>FAQ</p>
                    </div>

                    <div className='footer-column3'>
                        <span className='title-company'>COMPANY</span>
                        <p>About Us</p>
                        <p>Partnership</p>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;