import React, { useState } from 'react';
import { SiGmail } from "react-icons/si";
import image from '../assets/image.png';
import img1 from '../assets/vite.png';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase,  
  Award, 
  Users, 
  Target,
  ArrowLeft,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from 'lucide-react';

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const adminData = {
    name: "Tabrez Alam",
    position: "Founder and Executive Director",
    department: "Executive Leadership",
    email: "tabrez.zeta@gmail.com",
    phone: "+91 70042 65718",
    location: " Dhaka Champaran district , Bihar, India",
    joinDate: "January 2023",
    profileImage: image,
    bio: "Tabrez Alam: The Rising Star of NIT Srinagar and a Beacon of Generosity . In a world where personal achievements often take center stage, Tabrez Alam, an 8th-semester student from the Department of Information Technology at NIT Srinagar, is making headlines for not just his success but his selflessness. Hailing from Dhaka Champaran district in Bihar, Tabrez has become an inspiration for his peers with his extraordinary achievements and his commitment to giving back to society.",
    experience: [
      {
        title: "Founder and Executive Director",
        company: "ZETAWA DARK PRIVATE LIMITED",
        period: "Nov 2024 - Present",
        description: "Leading the company's strategic vision and overseeing all operations, driving growth and innovation across all business units."
      }
    ],
    qualifications: [
      "National Institute of Technology, Srinagar - B.Tech in Information Technology",
      "Resonance Eduventures Limited ",
      "W3webschool",
    ],
    achievements:[
      "Identified a critical bug in the MobiKwik digital payment application",
      "Earned a ₹1 lakh cash prize under the Responsible Disclosure Program",
      "Received a certificate of appreciation from MobiKwik"
    ],
    responsibilities: [
      "Strategic planning and business development",
      "Board relations and investor communications",
      "Executive team leadership and mentoring",
      "Corporate governance and compliance oversight",
      "Public relations and stakeholder management"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/tabrez-alam-59b6b61b3/",
      gmail:"tabrez.zeta@gmail.com",
      instagram :"https://www.instagram.com/tabrez_zeta?igsh=aXZveDRxend3NGpv",
      twitter:"https://x.com/tabrez_zeta?t=YaorG8xFInFR2bLaPxG0TA&s=08"
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'responsibilities', label: 'Responsibilities', icon: Target },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#ffffffff',
      minHeight: '100vh'
    }}>
      <Nav/>
      
      <div className="profile-container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1rem' 
      }}>        
        {/* Profile Header */}
        <div className="profile-header" style={{
          background: 'linear-gradient(135deg, #7e3a41ff, #884a51ff)',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
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
          
          <div className="profile-info" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'auto 1fr', 
            gap: '2rem', 
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="profile-image" style={{
              width: '440px',
              height: '440px',
              border: '4px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img
                src={adminData.profileImage}
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            
            <div className="profile-details">
              <h1 className="profile-name" style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                {adminData.name}
              </h1>
              <p className="profile-position" style={{ 
                fontSize: '1.25rem', 
                marginBottom: '0.5rem',
                opacity: '0.9'
              }}>
                {adminData.position}
              </p>
              
              <div className="contact-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} />
                  <span>{adminData.email}</span>
                </div>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} />
                  <span>{adminData.phone}</span>
                </div>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} />
                  <span>{adminData.location}</span>
                </div>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} />
                  <span>Joined {adminData.joinDate}</span>
                </div>
              </div>
              
              
              <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                {[
                  adminData.socialLinks.linkedin && {
                    icon: <Linkedin size={20} />,
                    link: adminData.socialLinks.linkedin
                  },
                  adminData.socialLinks.instagram && {
                    icon: <Instagram size={20} />,
                    link: adminData.socialLinks.instagram
                  },
                  adminData.socialLinks.instagram && {
                    icon: <Twitter size={20} />,
                    link: adminData.socialLinks.twitter
                  },
                  adminData.socialLinks.gmail && {
                    icon: <SiGmail size={20} />,
                    link: `mailto:${adminData.socialLinks.gmail}`
                  }
                ]
                  .filter(Boolean) // remove null/undefined entries
                  .map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        color: 'white'
                      }}
                    >
                      {item.icon}
                    </a>
                  ))}
              </div>

            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="tabs-container" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          {/* Tab Buttons */}
          <div className="tab-buttons" style={{ 
            display: 'flex', 
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e9ecef'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className="tab-button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: '1.5rem 0.5rem',
                  backgroundColor: activeTab === tab.id ? '#7e3a41ff' : 'transparent',
                  border: 'none',
                  color: activeTab === tab.id ? 'white' : '#666',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontWeight: '500',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <tab.icon size={20} />
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="tab-content" style={{ padding: '2rem' }}>
            {activeTab === 'overview' && (
              <div>
                <h2 className="section-title" style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem',
                  color: '#2d2d2d'
                }}>
                  Professional Overview
                </h2>
                <div style={{ marginBottom: '2rem' }}>
                  <p className="bio-text" style={{ 
                    lineHeight: '1.7', 
                    fontSize: '1.1rem',
                    color: '#666'
                  }}>
                    {adminData.bio}
                  </p>
                </div>
                
                <div className="overview-grid" style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '2rem' 
                }}>
                  <div className="info-card" style={{
                    padding: '2rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef'
                  }}>
                    <h3 style={{ 
                      color: '#7e3a41ff', 
                      marginBottom: '1.5rem',
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>
                      Contact Information
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div><strong style={{ color: '#2d2d2d' }}>Email:</strong> {adminData.email}</div>
                      <div><strong style={{ color: '#2d2d2d' }}>Phone:</strong> {adminData.phone}</div>
                      <div><strong style={{ color: '#2d2d2d' }}>Location:</strong> {adminData.location}</div>
                      <div><strong style={{ color: '#2d2d2d' }}>Department:</strong> {adminData.department}</div>
                    </div>
                  </div>
                  
                  <div className="info-card" style={{
                    padding: '2rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef'
                  }}>
                    <h3 style={{ 
                      color: '#7e3a41ff', 
                      marginBottom: '1.5rem',
                      fontSize: '1.3rem',
                      fontWeight: '600'
                    }}>
                      Qualifications
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {adminData.qualifications.map((qual, index) => (
                        <div key={index} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '0.5rem',
                          color: '#666'
                        }}>
                          <span style={{ color: '#7e3a41ff', fontWeight: 'bold' }}>•</span>
                          {qual}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'experience' && (
              <div>
                <h2 className="section-title" style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem',
                  color: '#2d2d2d'
                }}>
                  Professional Experience
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {adminData.experience.map((exp, index) => (
                    <div key={index} className="experience-card" style={{
                      padding: '2rem',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      border: '1px solid #e9ecef',
                      borderLeft: '4px solid #7e3a41ff'
                    }}>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem',
                        color: '#2d2d2d'
                      }}>
                        {exp.title}
                      </h3>
                      <div style={{ 
                        color: '#7e3a41ff', 
                        fontWeight: '500', 
                        marginBottom: '0.25rem',
                        fontSize: '1.1rem'
                      }}>
                        {exp.company}
                      </div>
                      <div style={{ 
                        color: '#666', 
                        fontSize: '0.95rem', 
                        marginBottom: '1rem' 
                      }}>
                        {exp.period}
                      </div>
                      <p style={{ 
                        color: '#555', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'responsibilities' && (
              <div>
                <h2 className="section-title" style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem',
                  color: '#2d2d2d'
                }}>
                  Key Responsibilities
                </h2>
                <div className="responsibilities-card" style={{
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ 
                    color: '#7e3a41ff', 
                    marginBottom: '1.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    Primary Duties
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {adminData.responsibilities.map((resp, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '0.75rem',
                        color: '#666',
                        fontSize: '1.05rem'
                      }}>
                        <span style={{ 
                          color: '#7e3a41ff', 
                          fontWeight: 'bold',
                          fontSize: '1.2rem'
                        }}>
                          •
                        </span>
                        {resp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div>
                <h2 className="section-title" style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '2rem',
                  color: '#2d2d2d'
                }}>
                  Key Achievements
                </h2>
                <div className="achievements-card" style={{
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ 
                    color: '#7e3a41ff', 
                    marginBottom: '1.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    Notable Accomplishments
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {adminData.achievements.map((achievement, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '0.75rem',
                        color: '#666',
                        fontSize: '1.05rem'
                      }}>
                        <span style={{ 
                          color: '#7e3a41ff', 
                          fontWeight: 'bold',
                          fontSize: '1.2rem'
                        }}>
                          •
                        </span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .social-link:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-2px);
        }

        .tab-button:hover {
          background-color: ${activeTab === 'overview' ? '#7e3a41ff' : '#e9ecef'} !important;
          color: ${activeTab === 'overview' ? 'white' : '#2d2d2d'} !important;
        }
        
        /* Tablet styles */
        @media (max-width: 1024px) {
          .profile-container {
            padding: 1rem !important;
          }
          
          .profile-header {
            padding: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .tab-content {
            padding: 1.5rem !important;
          }
          
          .overview-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .profile-container {
            padding: 0.5rem !important;
          }
          
          .profile-header {
            padding: 1rem !important;
            margin-bottom: 1rem !important;
          }
          
          .profile-info {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 1.5rem !important;
          }
          
          .profile-image {
            width: 100px !important;
            height: 100px !important;
            margin: 0 auto !important;
          }
          
          .profile-name {
            font-size: 1.8rem !important;
          }
          
          .profile-position {
            font-size: 1.1rem !important;
          }
          
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 0.8rem !important;
          }
          
          .contact-item {
            justify-content: center !important;
            font-size: 0.9rem !important;
          }
          
          .contact-item span {
            word-break: break-word;
          }
          
          .social-links {
            justify-content: center !important;
          }
          
          .tab-buttons {
            flex-wrap: wrap !important;
          }
          
          .tab-button {
            flex: 1 1 50% !important;
            min-width: 140px !important;
            padding: 1rem 0.5rem !important;
            font-size: 0.9rem !important;
          }
          
          .tab-content {
            padding: 1rem !important;
          }
          
          .section-title {
            font-size: 1.6rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .info-card,
          .experience-card,
          .responsibilities-card,
          .achievements-card {
            padding: 1.5rem !important;
          }
          
          .bio-text {
            font-size: 1rem !important;
          }
          
          .overview-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
        
        /* Small mobile styles */
        @media (max-width: 480px) {
          .profile-container {
            padding: 0.25rem !important;
          }
          
          .profile-header {
            padding: 0.8rem !important;
            border-radius: 8px !important;
          }
          
          .profile-image {
            width: 80px !important;
            height: 80px !important;
          }
          
          .profile-name {
            font-size: 1.5rem !important;
          }
          
          .profile-position {
            font-size: 1rem !important;
          }
          
          .contact-item {
            font-size: 0.85rem !important;
          }
          
          .social-links a {
            width: 35px !important;
            height: 35px !important;
          }
          
          .tab-button {
            padding: 0.8rem 0.3rem !important;
            font-size: 0.8rem !important;
          }
          
          .tab-label {
            display: none !important;
          }
          
          .tab-content {
            padding: 0.8rem !important;
          }
          
          .section-title {
            font-size: 1.4rem !important;
            margin-bottom: 1rem !important;
          }
          
          .info-card,
          .experience-card,
          .responsibilities-card,
          .achievements-card {
            padding: 1rem !important;
          }
          
          .bio-text {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminProfile;