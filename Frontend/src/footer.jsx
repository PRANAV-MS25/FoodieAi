import styles from './footer.module.css';
import Newsletter from './Newsletter';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Common style for links to ensure they are easily clickable blocks
    const linkStyle = {
        color: 'inherit',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        fontWeight: '500',
        padding: '5px 10px',
        borderRadius: '4px',
        transition: 'background-color 0.2s ease'
    };

    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerGrid}>
                {/* Contact and Info Section */}
                <div className={styles.aboutUs}>
                    <h2>Welcome to Foodie.com</h2>
                    <em>Feel free to contact us.</em>
                    <p style={{ margin: '8px 0 4px 0' }}>PH: +91 8431032065</p>
                    <p style={{ margin: '0 0 8px 0' }}>Email: mathampranav@gmail.com</p>
                </div>

                {/* Newsletter Section */}
                <Newsletter />

                {/* Personal Social Media Section */}
                <div className={styles.socialMedia}>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/pranav-matham" target="_blank" rel="noreferrer" title="LinkedIn" style={linkStyle}>
                            <i className="fab fa-linkedin" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
                            <span>LinkedIn</span>
                        </a>
                        
                        {/* GitHub */}
                        <a href="https://github.com/PRANAV-MS25/FoodieAi" target="_blank" rel="noreferrer" title="GitHub" style={linkStyle}>
                            <i className="fab fa-github" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
                            <span>GitHub</span>
                        </a>
                        
                        {/* Instagram */}
                        <a href="https://www.instagram.com/m__pranav__004?igsh=MXB0OXIyZjFrZmVrag==" target="_blank" rel="noreferrer" title="Instagram" style={linkStyle}>
                            <i className="fab fa-instagram" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
                            <span>Instagram</span>
                        </a>
                        
                        {/* WhatsApp */}
                        <a href="https://wa.me/918277719635" target="_blank" rel="noreferrer" title="WhatsApp" style={linkStyle}>
                            <i className="fab fa-whatsapp" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
                            <span>WhatsApp</span>
                        </a>

                    </div>
                </div>
            </div>

            {/* Navigation Button */}
            <div className={styles.backToTop}>
                <button onClick={scrollToTop}><b>Back to top ↑</b></button>
            </div>

            {/* Copyright Section */}
            <div className={styles.copyright}>
                <p>
                    © All Rights Reserved 2026 | Designed by <b><i>Loader Logic</i></b>
                </p>
            </div>
        </footer>
    );
};

export default Footer;