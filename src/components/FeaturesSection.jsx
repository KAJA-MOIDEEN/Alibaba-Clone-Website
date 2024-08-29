
import { Link } from 'react-router-dom';
import './FeaturesSection.css'
const FeaturesSection = ()=>{

    return (
    <>
      {/* Features Section */}
      <section id="features" className='features'>
        <h3 className='sectionTitle'>Features</h3>
        <div className='featureList'>
        <Link to={`/shop`} className='FeatureItemLink'>
          <div className='featureItem'>  
            <h4>Shoping</h4>
            <p>Top-quality products, unbeatable prices, and global shipping at AlibabaShop.com.</p>
          </div>
        </Link>
        <Link to={`/website`} className='FeatureItemLink'>
          <div className='featureItem'>
            <h4>Responsive</h4>
            <p>Designed to work on all devices, from desktops to mobile phones.</p>
          </div>
        </Link>
        <Link to={`/other`} className='FeatureItemLink'>
          <div className='featureItem'>
            <h4>Secure</h4>
            <p>Security is our top priority, ensuring your data is always safe.</p>
          </div>
        </Link>
        </div>
      </section>
      </>  
    );
  }

export default FeaturesSection;