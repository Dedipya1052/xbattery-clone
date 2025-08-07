// pages/index.tsx
import React from 'react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay loop muted className="background-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <nav className="navbar">
          <img src="/xbattery-logo.webp" alt="XBattery Logo" className="logo" />
          <ul>
            
            <li>Energy Storage</li>
            <li>BharatBMS</li>
            <li>About</li>
            <li>Blog</li>
            <li>Whitepapers</li>
          </ul>
          <button className="customer-portal-btn">Customer Portal</button>
        </nav>
        <div className="hero-content">
          <h1>Introducing BharatBMS</h1>
          <p>Scalable up to 800V for EVs, home backup, and energy storage</p>
          
        </div>
      </section>
<div>
     {/* BharatBMS Section */}
<section className="bharatbms-section">
  <div className="bharatbms-image">
    <img src="/bharatbms.webp" alt="BharatBMS" />
  </div>
  <div className="bharatbms-content">
    <h2>BharatBMS</h2>
    <p className="paragraph">
      India&apos;s first universal Battery Management System scales from 5kWh setups to megawatt applications, offering modular upgrades and reliable performance in tough power conditions.
    </p>
    <p className="paragraph">
      Made in India with local components, it ensures fast support and customization while driving innovation in energy storage and EV products.
    </p>
    <button className="know-more-button">Know More →</button>
  </div>
  
</section>

</div>
<div>
  
</div>
      {/* Power Your Home Section */}
      <section className="power-section">
        <video autoPlay loop muted className="power-bg-video">
          <source src="/home-battery.mp4" type="video/mp4" />
        </video>
        <div className="power-content">
          
        </div>
      </section>

      {/* Capacity Section */}
      
      <section className="capacity-section">
        <div className="capacity-left">
          <img src="/battery-img.webp" className="battery-img" />
          <img src="/half-circle-img.webp" className="half-circle-img" />
        </div>
        <div className="capacity-right">
          <h2>XBattery 5 kWh</h2>
          <ul>
            <li><strong>Reliable Backup:</strong> Powers your home for up to a day during outages.</li>
            <li><strong>Solar Safeguard:</strong> Stops charging automatically when the battery is full.</li>
            <li><strong>Intelligent Modes:</strong> Adjusts for power cuts and restores seamlessly.</li>
            <li><strong>Expandable System:</strong> Add modules as your energy needs grow.</li>
          </ul>
        </div>
      </section>

    {/* How It Works Section */}
<section className="how-works-section">
  <video
    className="how-video"
    autoPlay
    muted
    loop
    playsInline
    src="/home.mp4"
  ></video>

  <div className="how-overlay">
    <h2 className="how-title">How It Works</h2>
    <p className="how-subtext">
      You&apos;re covered at every stage of an outage. Its intelligent modes kick in before the power goes out, ensuring your home stays powered through any disruption.
    </p>

    <div className="how-modes">
      <div className="mode-card">
        <h3>Normal Operation</h3>
        <p>
          In Normal Mode, the 5kWh XBattery provides reliable power for your home, ensuring daily activities run smoothly without any interruptions.
        </p>
      </div>
      <div className="mode-card">
        <h3>During Power Outages</h3>
        <p>
          Automatically switches to backup mode, powering your essentials without delay when the grid fails.
        </p>
      </div>
      <div className="mode-card">
        <h3>Power Restoration</h3>
        <p>
          Effortlessly transitions back to grid power while charging itself, preparing for the next outage.
        </p>
      </div>
      <div className="mode-card">
        <h3>Solar Integration</h3>
        <p>
          Seamlessly integrates with solar panels to store excess energy and use it when needed.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Reliable Energy Section */}
<section className="reliable-energy-section">
  <img src="/home1.webp" alt="Home Battery" className="reliable-bg" />
  <div className="reliable-overlay" />
  <div className="reliable-content">
    <h2>Reliable Energy Storage for Your Home</h2>
    <p>
      XBattery blends seamlessly into your home, occupying minimal space while providing reliable energy storage.
      It helps manage energy efficiently, lowers electricity bills, and ensures dependable backup power during outages.
    </p>
  </div>
</section>


      {/* Learn Section */}
<section className="learn-energy-section">
  <img src="/energy_storage.webp" alt="Learn Energy" className="learn-bg" />
  <div className="learn-overlay" />
  <div className="learn-content">
    <h2>Learn Energy Storage, Batteries and more</h2>
    <p>
      Get insights into energy, energy storage, and how they work. Our learning hub simplifies these concepts
      to help you understand and make the most of sustainable energy.
    </p>
    <a href="#" className="learn-link">XBattery Learn Hub →</a>
  </div>
</section>


{/* Blog Section */}
<section className="blog-section">
  <h2>Latest Blogs</h2>
  <div className="blogs">
    {/* Blog 1 */}
    <div className="blog-card">
      <img src="/blog1.webp" alt="Switched Capacitor" className="blog-img" />
      <p className="blog-date">Jul 7, 2025 • Active Balancing</p>
      <h3>Switched Capacitor Based Active Balancing: A Guide</h3>
      <p>
        Active charge balancing in Li-ion battery packs improves efficiency, battery life, and safety.
        Learn how it works and why it’s essential for energy storage systems.
      </p>
      <a href="#" className="read-more">Read More →</a>
    </div>

    {/* Blog 2 */}
    <div className="blog-card">
      <img src="/blog2.webp" alt="Li-ion Batteries" className="blog-img" />
      <p className="blog-date">May 15, 2025 • Li-ion Battery Packs</p>
      <h3>Active Charge Balancing of Li-ion Batteries: A Guide</h3>
      <p>
        Active charge balancing in Li-ion battery packs improves efficiency, battery life, and safety.
        Learn how it works and why it’s essential for energy storage systems.
      </p>
      <a href="#" className="read-more">Read More →</a>
    </div>

    {/* Blog 3 */}
    <div className="blog-card">
      <img src="/blog3.webp" alt="BESS Contactors" className="blog-img" />
      <p className="blog-date">Apr 2, 2025 • BESS</p>
      <h3>Role of Contactors in BESS and BMS</h3>
      <p>
        In a BESS, contactors (K1–K4) manage safe connections for charging and discharging. The BMS
        controls them, enabling pre-charge, load/charge switching, and isolation during faults for system safety.
      </p>
      <a href="#" className="read-more">Read More →</a>
    </div>
  </div>

  <div className="view-all-btn">
    <a href="#">View All Blogs →</a>
  </div>
</section>


     {/* Footer Section */}
<footer className="footer">
  <div className="footer-top">
    <div className="footer-left">
      <h2>View All Blogs →</h2>
      <p>Get the updates from Xbattery</p>
      <div className="email-form">
        <input type="email" placeholder="Enter your email" />
        <button>Get Notified</button>
      </div>
    </div>

    <div className="footer-right">
      <div className="footer-logo-desc">
        <img src="/xbattery-logo.webp" alt="XBattery Logo" className="footer-logo" />
        <p className="footer-description">
          Xbattery™ is building lithium battery packs in India, including electronics and software, to help businesses,
          EVs and grids store energy affordably and access it on demand.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Products</h4>
          <ul>
            <li><a href="#">Xbattery 5kWh</a></li>
            <li><a href="#">BharatBMS</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Whitepapers</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 Xbattery Energy Private Limited. All rights reserved. <a href="#">Terms</a> and <a href="#">Privacy</a>.</p>
  </div>
</footer>

    </>
  )
}
