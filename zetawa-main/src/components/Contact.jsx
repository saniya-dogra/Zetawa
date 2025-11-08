import { useState, useEffect } from 'react';
import { Phone, Mail,Instagram,Linkedin, MapPin, Send, MessageSquare } from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth <= 1024
      });
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { isMobile, isTablet } = screenSize;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form data submitted:", formData);
    
    try {
      const response = await fetch('https://zetawa-dark-backend.onrender.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });


      const result = await response.json();

      if (response.ok) {
        alert(`Message sent successfully! Sent to: ${result.sentTo || 'our team'}`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Helpline',
      details: [
        { label: 'Main Office', value: '+91 70042 65718' },
        { label: 'Customer Support', value: 'support@dark.zetawa.com' },
        { label: 'Sales Inquiries', value: 'sales@dark.zetawa.com' }
      ]
    },
 
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        { label: 'Director', value: 'director@zetawa.com' },
        { label: 'Admin', value: 'admin@zetawa.com' },
        { label: 'Founder', value: 'founder@zetawa.com' },
        { label: 'HR Department', value: 'hr@dark.zetawa.com' }
      ]
    },
    {
      icon: MapPin,
      title: 'Company Address',
      details: [
        { label: 'Headquarters', value: 'Dhaka Champaran district' },
        { label: 'City', value: 'Bihar' },
        { label: 'Country', value: 'India' }
      ]
    }
  ];

  const iconMap = {
  LinkedIn: <Linkedin size={isMobile ? 16 : 20} />,
  Instagram: <Instagram size={isMobile ? 16 : 20} />,
  Phone: <Phone size={isMobile ? 16 : 20} />,
  Email: <Mail size={isMobile ? 16 : 20} />
};

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/107492000/admin/dashboard/',
    color: '#0077B5'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/zetawadark?igsh=NXQ0dTdram83ejQx',
    color: '#E4405F'
  },
  {
    name: 'Phone',
    url: 'tel:7004265718',
    color: '#34A853'
  },
  {
    name: 'Email',
    url: 'mailto:director@zetawa.com',
    color: '#EA4335'
  }
];

  return (
    <>
      <div style={{ 
        margin: '-8px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#304356ff',
        minHeight: '100vh',
        marginTop: '-1rem'
      }}>
        <Nav />  
        {/* Header */}
        <header style={{ 
          backgroundColor: '#7e3a41ff',
          color: 'white',
          padding: isMobile ? '2rem 0' : '4rem 0',
          textAlign: 'center'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: isMobile ? '0 1rem' : '0 2rem' 
          }}>
            <h1 style={{ 
              fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.5rem',
              fontWeight: '700', 
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Contact Us
            </h1>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem',
              opacity: '0.9', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Get in touch with our team - we're here to help!
            </p>
          </div>
        </header>

        {/* Contact Info Section */}
        <section style={{ 
          padding: isMobile ? '2rem 0' : '5rem 0',
          backgroundColor: 'white' 
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: isMobile ? '0 1rem' : '0 2rem' 
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: isMobile ? '1.5rem' : '2rem',
              marginBottom: '3rem'
            }}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  style={{
                    padding: isMobile ? '1.5rem' : '2rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '1.5rem' 
                  }}>
                    <info.icon size={isMobile ? 20 : 24} style={{ color: '#7e3a41ff', marginRight: '0.5rem' }} />
                    <h3 style={{ 
                      fontSize: isMobile ? '1.1rem' : '1.3rem',
                      fontWeight: '600', 
                      margin: '0', 
                      color: '#2d2d2d' 
                    }}>
                      {info.title}
                    </h3>
                  </div>
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} style={{ 
                      marginBottom: '1rem',
                      paddingBottom: '1rem',
                      borderBottom: detailIndex < info.details.length - 1 ? '1px solid #e9ecef' : 'none'
                    }}>
                      <div style={{ 
                        fontWeight: '600', 
                        color: '#2d2d2d', 
                        marginBottom: '0.25rem',
                        fontSize: isMobile ? '0.9rem' : '1rem'
                      }}>
                        {detail.label}
                      </div>
                      <div style={{ 
                        color: '#666',
                        fontSize: isMobile ? '0.85rem' : '1rem',
                        wordBreak: 'break-word'
                      }}>
                        {detail.value}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section style={{ 
          padding: isMobile ? '2rem 0' : '5rem 0',
          backgroundColor: '#f8f9fa' 
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: isMobile ? '0 1rem' : '0 2rem' 
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '2fr 1fr',
              gap: isMobile ? '2rem' : '3rem',
              alignItems: 'start' 
            }}>
              
              {/* Contact Form */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                padding: isMobile ? '1.5rem' : '2rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                order: isMobile ? 2 : 1
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '2rem' 
                }}>
                  <MessageSquare size={isMobile ? 20 : 24} style={{ color: '#7e3a41ff', marginRight: '0.5rem' }} />
                  <h3 style={{ 
                    fontSize: isMobile ? '1.4rem' : '1.8rem',
                    fontWeight: '600', 
                    margin: '0', 
                    color: '#2d2d2d' 
                  }}>
                    Send us a Message
                  </h3>
                </div>
                
                <div>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '1rem' : '2rem',
                    marginBottom: '1rem' 
                  }}>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        color: '#666', 
                        fontWeight: '500', 
                        marginBottom: '0.5rem',
                        fontSize: isMobile ? '0.9rem' : '1rem'
                      }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          padding: isMobile ? '0.6rem 1rem' : '0.75rem 1rem',
                          border: '1px solid #e9ecef',
                          borderRadius: '8px',
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          backgroundColor: isSubmitting ? '#f8f9fa' : 'white',
                          color: '#2d2d2d',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                      />
                    </div>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        color: '#666', 
                        fontWeight: '500', 
                        marginBottom: '0.5rem',
                        fontSize: isMobile ? '0.9rem' : '1rem'
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          padding: isMobile ? '0.6rem 1rem' : '0.75rem 1rem',
                          border: '1px solid #e9ecef',
                          borderRadius: '8px',
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          backgroundColor: isSubmitting ? '#f8f9fa' : 'white',
                          color: '#2d2d2d',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                      />
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '1rem' : '1rem',
                    marginBottom: '1rem' 
                  }}>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        color: '#666', 
                        fontWeight: '500', 
                        marginBottom: '0.5rem',
                        fontSize: isMobile ? '0.9rem' : '1rem'
                      }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          padding: isMobile ? '0.6rem 1rem' : '0.75rem 1rem',
                          border: '1px solid #e9ecef',
                          borderRadius: '8px',
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          backgroundColor: isSubmitting ? '#f8f9fa' : 'white',
                          color: '#2d2d2d',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                      />
                    </div>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        color: '#666', 
                        fontWeight: '500', 
                        marginBottom: '0.5rem',
                        fontSize: isMobile ? '0.9rem' : '1rem'
                      }}>
                        Inquiry Type *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          padding: isMobile ? '0.6rem 1rem' : '0.75rem 1rem',
                          border: '1px solid #e9ecef',
                          borderRadius: '8px',
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          backgroundColor: isSubmitting ? '#f8f9fa' : 'white',
                          color: '#2d2d2d',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                      >
                        <option value="">Select inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="careers">Career Opportunities</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ 
                      display: 'block', 
                      color: '#666', 
                      fontWeight: '500', 
                      marginBottom: '0.5rem',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={isMobile ? "4" : "5"}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your inquiry in detail..."
                      required
                      disabled={isSubmitting}
                      style={{
                        width: '100%',
                        padding: isMobile ? '0.6rem 1rem' : '0.75rem 1rem',
                        border: '1px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        backgroundColor: isSubmitting ? '#f8f9fa' : 'white',
                        color: '#2d2d2d',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        resize: 'vertical',
                        minHeight: isMobile ? '100px' : '120px',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#7e3a41ff'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    ></textarea>
                  </div>
                  
                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: isSubmitting ? '#999' : '#7e3a41ff',
                      color: 'white',
                      border: 'none',
                      padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
                      borderRadius: '8px',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontWeight: '500',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'background-color 0.3s ease',
                      width: isMobile ? '100%' : 'auto'
                    }}
                    onMouseOver={(e) => {
                      if (!isSubmitting) {
                        e.target.style.backgroundColor = '#884a51ff';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isSubmitting) {
                        e.target.style.backgroundColor = '#7e3a41ff';
                      }
                    }}
                  >
                    <Send size={isMobile ? 16 : 20} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '2rem',
                order: isMobile ? 1 : 2
              }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  padding: isMobile ? '1.5rem' : '2rem',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.2rem' : '1.3rem',
                    fontWeight: '600', 
                    marginBottom: '1rem', 
                    color: '#2d2d2d' 
                  }}>
                    Connect with Us
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '1.5rem', 
                    lineHeight: '1.6',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}>
                    Follow us on social media for the latest updates and news.
                  </p>
                  
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      justifyContent: isMobile ? 'center' : 'flex-start'
                    }}
                  >
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: isMobile ? '36px' : '40px',
                          height: isMobile ? '36px' : '40px',
                          borderRadius: '50%',
                          backgroundColor: social.color,
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'transform 0.2s',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      >
                        {iconMap[social.name]}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  padding: isMobile ? '1.5rem' : '2rem',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.2rem' : '1.3rem',
                    fontWeight: '600', 
                    marginBottom: '1rem', 
                    color: '#2d2d2d' 
                  }}>
                    Quick Response
                  </h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#2d2d2d', 
                      marginBottom: '0.25rem',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      General Inquiries
                    </div>
                    <div style={{ 
                      color: '#666',
                      fontSize: isMobile ? '0.85rem' : '1rem'
                    }}>Within 24 hours</div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#2d2d2d', 
                      marginBottom: '0.25rem',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      Support Requests
                    </div>
                    <div style={{ 
                      color: '#666',
                      fontSize: isMobile ? '0.85rem' : '1rem'
                    }}>Within 4 hours</div>
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#2d2d2d', 
                      marginBottom: '0.25rem',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      Sales Inquiries
                    </div>
                    <div style={{ 
                      color: '#666',
                      fontSize: isMobile ? '0.85rem' : '1rem'
                    }}>Within 2 hours</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
};

export default Contact;