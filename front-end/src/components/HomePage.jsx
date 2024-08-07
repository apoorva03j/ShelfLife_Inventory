import banner from '../assets/images/banner.png';
import banner2 from '../assets/images/banner2.png';
import '../assets/css/HomePage.css';
import { Link } from 'react-router-dom';
import Header1 from './Header1';
import Footer from './Footer';

const HomePage = () => {
    return(
        <>
        <Header1/>
        <div className="homepage-content">

            <Link to={'/signup'}>
            <img src={banner} alt="banner1" className='img-banner'/>
            </Link>
            <br/>
            <br/>
            <div className='page'>
            <h1>Catered to your specific needs</h1>
            <div className='page-2'>
                <div className='page-div'>
                    <h2>Warehouse Management</h2>
                    <div className='page-div-sub'>
                        <p>Optimize your storage space and resources. Efficiently manage incoming and outgoing products.</p>
                    </div>
                </div>
                
                <div className='page-div'>
                    <h2>Inventory Tracking</h2>
                    <div className='page-div-sub'>
                        <p>Real-time visibility of stock levels. <br/>Prevent stockouts and overstocking.</p>
                    </div>
                </div>
                <div className='page-div'>
                    <h2>Expiry Tracking</h2>
                    <div className='page-div-sub'>
                        <p>Proactive management of product shelf life. Minimize wastage and maintain product quality.</p>
                    </div>
                </div>
                <div className='page-div'>
                    <h2>Vendor Integration</h2>
                    <div className='page-div-sub'>
                        <p>Streamline supplier interactions. Ensure timely deliveries and accurate invoicing.</p>
                    </div>
                </div>

            </div>
            </div>

            <Link to={'/signup'}>
            <img src={banner2} alt="banner" className='img-banner'/>
            </Link>

            <br/>
            <br/>
            <h1>What Our Customers Say</h1>
            <section className="review-section">
                <div className="review-container">
                    <div className="review-card">
                    <p className="user-name">Jane Smith, Marketing Manager</p>
                    <p className="review-text">
                        "This product has completely transformed our marketing efforts. The ease of use and powerful features have made a significant impact on our bottom line."
                    </p>
                    </div>
                    <div className="review-card">
                    <p className="user-name">David Lee, Software Engineer</p>
                    <p className="review-text">
                        "As a developer, I appreciate the clean and intuitive API. It has saved me countless hours of development time."
                    </p>
                    </div>
                    <div className="review-card">
                    <p className="user-name">Emily Chen, Small Business Owner</p>
                    <p className="review-text">
                        "This tool has been a game-changer for my small business. It's helped me manage my inventory and customers more efficiently."
                    </p>
                    </div>
                </div>
            </section>

            <br/>
            <br/>
            <br/>






        </div>

        <Footer/>
        </>

    );
}

export default HomePage;