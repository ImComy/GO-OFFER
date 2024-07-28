import './appdownload.css';

function Download() {
  return (
    <div className='appdownload-container'>
    { <img src='./phone.png' alt="Phone mockup" className='appdownload-img-phone'/> }
      <div className='appdownload-content'>
        <div className='appdownload-find'>
          <div className='appdownload-text-container'>
            <p className='appdownload-text1'> Find Coupons </p>
            <p className='appdownload-text2'> ON-THE-GO </p>
            <p className='appdownload-text3'> Download the app now </p>
          </div>
          <div className='appdownload-links'>
            <a href="#">
              <img src='./app_store.png' className='appdownload-img' alt="App Store icon" />
            </a>
            <a href="#">
              <img src='./googleplay.png' className='appdownload-img' alt="Google Play icon" />
            </a>
          </div>
        </div>
        <div className='appdownload-discount'>
          <p className='appdownload-discount-text'> DISCOUNTS </p>
          <p className='appdownload-discount-text'> DISCOUNTS </p>
          <p className='appdownload-discount-text'> DISCOUNTS </p>
          <p className='appdownload-discount-text'> DISCOUNTS </p>
          <p className='appdownload-discount-text'> DISCOUNTS </p>
          <p className='appdownload-discount-text'> DISCOUNTS </p>
        </div>
      </div>
    </div>
  );
}

export default Download;
