import React from 'react';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Lightbulb, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';



const AboutUs = () => {
  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#ffffffff',
      minHeight: '100vh'
    }}>
      <Nav />
      
      {/* Hero Section */}
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, #7e3a41ff, #884a51ff)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><defs><pattern id=\'grain\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'><circle cx=\'50\' cy=\'50\' r=\'0.5\' fill=\'rgba(255,255,255,0.1)\'/></pattern></defs><rect width=\'100\' height=\'100\' fill=\'url(%23grain)\'/></svg>")',
          opacity: 0.1
        }} />
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            lineHeight: '1.2'
          }}>
            Transforming Businesses <br /> with  <br />Intelligent Software Solutions
          </h1>
          <p style={{ 
            fontSize: '1.4rem', 
            marginBottom: '2.5rem',
            opacity: '0.95',
            lineHeight: '1.6'
          }}>
            Empowering organizations with cutting-edge technology solutions that drive growth, 
            enhance efficiency, and unlock new possibilities in the digital age.
          </p>
         
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Mission & Vision Section */}
        <div className="mission-vision-section" style={{ padding: '4rem 0' }}>
          <div className="row" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '3rem',
            alignItems: 'stretch'
          }}>
            {/* Vision Card */}
            <div className="vision-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #7e3a41ff, #884a51ff)',
                borderRadius: '50%',
                opacity: '0.1'
              }} />
              
              <div style={{ 
                background: 'linear-gradient(135deg, #7e3a41ff, #884a51ff)',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <Eye size={28} color="white" />
              </div>
              
              <h2 style={{ 
                fontSize: '2.2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: '#2d2d2d'
              }}>
                Our Vision
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.7', 
                color: '#666',
                margin: 0
              }}>
                To be a leading technology partner that transforms how businesses operate, 
                innovate, and grow through intelligent software solutions that make complex 
                challenges simple and accessible.
              </p>
            </div>

            {/* Mission Card */}
            <div className="mission-card" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #7e3a41ff, #884a51ff)',
                borderRadius: '50%',
                opacity: '0.1'
              }} />
              
              <div style={{ 
                background: 'linear-gradient(135deg, #7e3a41ff, #884a51ff)',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <Target size={28} color="white" />
              </div>
              
              <h2 style={{ 
                fontSize: '2.2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: '#2d2d2d'
              }}>
                Our Mission
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.7', 
                color: '#666',
                margin: 0
              }}>
                We empower businesses of all sizes with innovative, user-friendly software 
                solutions that streamline operations, enhance productivity, and drive sustainable 
                growth in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart Section */}
        <div className="differentiators-section" style={{ 
          padding: '4rem 0',
          background: '#f8f9fa',
          borderRadius: '25px',
          margin: '0 -1rem'
        }}>
          <div style={{ padding: '0 3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ 
                fontSize: '2.8rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                color: '#2d2d2d'
              }}>
                What Sets Us Apart
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Our commitment to excellence and innovation makes us the preferred 
                technology partner for forward-thinking businesses.
              </p>
            </div>

            <div className="features-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2.5rem'
            }}>
              {[
                {
                  icon: <Lightbulb size={32} />,
                  title: "Innovation-First Approach",
                  description: "We stay ahead of technology trends, continuously exploring emerging technologies to deliver cutting-edge solutions that give our clients a competitive advantage."
                },
                {
                  icon: <Users size={32} />,
                  title: "User-Centric Design",
                  description: "Every solution we create prioritizes user experience, ensuring our software is intuitive, accessible, and designed with real user needs at the forefront."
                },
                {
                  icon: <Shield size={32} />,
                  title: "Reliability & Security",
                  description: "Our robust development practices and security-first mindset ensure that your business data and operations remain protected and consistently available."
                },
                {
                  icon: <Zap size={32} />,
                  title: "Agile Development",
                  description: "We embrace agile methodologies to deliver solutions faster, adapt to changing requirements, and maintain transparent communication throughout the development process."
                },
                {
                  icon: <Award size={32} />,
                  title: "Proven Excellence",
                  description: "Our track record of successful projects and satisfied clients demonstrates our commitment to delivering high-quality solutions that exceed expectations."
                },
                {
                  icon: <CheckCircle size={32} />,
                  title: "Comprehensive Support",
                  description: "From initial consultation to ongoing maintenance, we provide end-to-end support to ensure your success with our solutions at every stage of your journey."
                }
              ].map((feature, index) => (
                <div key={index} className="feature-card" style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
                }}>
                  <div style={{ 
                    color: '#7e3a41ff',
                    marginBottom: '1.5rem'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: '#2d2d2d'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    margin: 0
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .hero-section h1 {
            font-size: 2.8rem !important;
          }
          
          .hero-section p {
            font-size: 1.2rem !important;
          }
          
          .mission-vision-section .row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
            gap: 2rem !important;
          }
          
          .differentiators-section {
            padding: 3rem 0 !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1rem !important;
          }
          
          .hero-section h1 {
            font-size: 2.2rem !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-section p {
            font-size: 1.1rem !important;
            margin-bottom: 2rem !important;
          }
          
          .hero-section button {
            padding: 0.8rem 2rem !important;
            font-size: 1rem !important;
          }
          
          .mission-vision-section {
            padding: 3rem 0 !important;
          }
          
          .mission-vision-section .row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .vision-card, .mission-card {
            padding: 2rem !important;
            border-radius: 16px !important;
          }
          
          .vision-card h2, .mission-card h2 {
            font-size: 1.8rem !important;
          }
          
          .differentiators-section {
            padding: 2rem 0 !important;
          }
          
          .differentiators-section > div {
            padding: 0 1.5rem !important;
          }
          
          .differentiators-section h2 {
            font-size: 2.2rem !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .feature-card {
            padding: 2rem !important;
          }
          
          .cta-section {
            padding: 3rem 0 !important;
          }
          
          .cta-section > div > div {
            padding: 3rem 2rem !important;
          }
          
          .cta-section h2 {
            font-size: 2rem !important;
          }
          
          .cta-section > div > div > div > div {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .cta-section button {
            width: 100% !important;
            max-width: 250px !important;
          }
        }
        
        /* Small mobile styles */
        @media (max-width: 480px) {
          .hero-section {
            padding: 2rem 0.5rem !important;
          }
          
          .hero-section h1 {
            font-size: 1.8rem !important;
          }
          
          .hero-section p {
            font-size: 1rem !important;
          }
          
          .vision-card, .mission-card {
            padding: 1.5rem !important;
          }
          
          .vision-card h2, .mission-card h2 {
            font-size: 1.6rem !important;
          }
          
          .differentiators-section > div {
            padding: 0 1rem !important;
          }
          
          .differentiators-section h2 {
            font-size: 1.8rem !important;
          }
          
          .feature-card {
            padding: 1.5rem !important;
          }
          
          .cta-section > div > div {
            padding: 2rem 1.5rem !important;
          }
          
          .cta-section h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;