import React, { useEffect, useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Award, Shield, CheckCircle, Download, ExternalLink } from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';
import internpdf from '../assets/intern2.pdf'
import internpdf2 from '../assets/intern.pdf'

// https://drive.google.com/file/d/1bpJ_rbaJqRHp287CgEURkkoskv96JwyG/view?usp=drivesdk

const Certifications = () => {

  const [searchCertNumber, setSearchCertNumber] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // Sample certificate data with Google Drive links
  const certificates = [
    {
      id: 1,
      certificateNumber: 'ZD202501',
      internName: 'Manjeet Kumar',
      course: 'Data Analyst',
      issueDate: '2025-05-05',
      completionDate: '2025-07-05',
      status: 'Valid',
      duration: '3 months',
      driveLink: internpdf2
    },
    {
      id: 2,
      certificateNumber: 'ZD202502', 
      internName: 'Harshwardhan Rahul Patil',
      course: 'Software Development',
      issueDate: '2024-12-01',
      completionDate: '2025-08-31',
      status: 'Valid',
      duration: '8 months',
      driveLink: internpdf
    }

  ];

  const handleValidation = () => {
    if (!searchCertNumber.trim()) {
      setValidationResult({
        type: 'error',
        message: 'Please enter a certificate number'
      });
      return;
    }

    const certificate = certificates.find(cert => 
      cert.certificateNumber.toLowerCase() === searchCertNumber.toLowerCase()
    );

    if (certificate) {
      setValidationResult({
        type: 'success',
        message: 'Certificate found and validated!',
        data: certificate
      });
    } else {
      setValidationResult({
        type: 'error',
        message: 'Certificate not found. Please check the certificate number.'
      });
    }
  };

  const handleAdminLogin = () => {
    if (adminCredentials.username === 'tabrezalam' && adminCredentials.password === 'tabrezalam123') {
      setIsAdminLoggedIn(true);
      setShowAdminLogin(false);
    } else {
      alert('Invalid credentials');
    }
  };

  const resetSearch = () => {
    setSearchCertNumber('');
    setValidationResult(null);
  };

  const handleDownloadCertificate = (driveLink) => {
    // Convert view link to download link
    const downloadLink = driveLink.replace('/view?usp=sharing', '/export?format=pdf');
    window.open(downloadLink, '_blank');
  };

  const handleViewCertificate = (driveLink) => {
    window.open(driveLink, '_blank');
  };

  const CertificateImage = ({ certificate }) => (
    <div style={{
      background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
      border: '8px solid var(--primary-red)',
      borderRadius: '15px',
      padding: '40px',
      color: '#000',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
    }}>
      
      <div style={{ borderBottom: '3px solid var(--primary-red)', paddingBottom: '20px', marginBottom: '30px' }}>
        <h2 style={{ color: 'var(--primary-red)', fontWeight: 'bold', margin: '0' }}>ZETAWA DARK</h2>
        <p style={{ color: '#666', fontSize: '14px', margin: '15px 0 0 0' }}>Certificate of Completion</p>
      </div>
      
      <div style={{ margin: '30px 0' }}>
        <p style={{ fontSize: '16px', color: '#666', margin: '10px 0' }}>This is to certify that</p>
        <h3 style={{ fontSize: '2rem', color: '#333', fontWeight: 'bold', margin: '15px 0' }}>
          {certificate.internName}
        </h3>
        <p style={{ fontSize: '16px', color: '#666', margin: '10px 0' }}>has successfully completed</p>
        <h4 style={{ fontSize: '1.5rem', color: 'var(--primary-red)', fontWeight: '600', margin: '15px 0' }}>
          {certificate.course}
        </h4>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', fontSize: '14px', color: '#666' }}>
        <div>
          <p><strong>Certificate No:</strong> {certificate.certificateNumber}</p>
        </div>
        <div>
          <p><strong>Date:</strong> {certificate.completionDate}</p>
          <p><strong>Duration:</strong> {certificate.duration}</p>
        </div>
      </div>

      
    </div>
  );

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#304356ff',
      minHeight: '100vh'
    }}>
       <Nav/>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'var(--primary-red)',
        color: 'white',
        padding: '4rem 0',
        position: 'relative'
      }}>
        
        <div style={{ maxWidth: 'auto', margin: '0 auto', padding: '0 2rem' }}>
        
          <div style={{ textAlign: 'center', marginTop: '-2rem' }}>
            
            <h1 style={{ fontSize: '2.5rem', opacity: '0.9', marginBottom: '0.5rem' }}>
              Certificate Verification Portal
            </h1>
            <p style={{ fontSize: '0.8rem', opacity: '0.8', maxWidth: '600px', margin: '0 auto' }}>
              Validate your internship completion certificate with our secure verification system
            </p>
          </div>
        </div>
      </header>

      {/* Certificate Validation Section */}
      <section className="section-padding" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
              Verify Your Certificate
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Enter your certificate number below to verify authenticity and view your official certificate
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '1.5rem',
              borderRadius: '15px',
              border: '1px solid #e9ecef',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#2d2d2d',
                  marginBottom: '0.5rem'
                }}>
                  Certificate Number
                </label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    placeholder="Enter certificate number"
                    value={searchCertNumber}
                    onChange={(e) => setSearchCertNumber(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleValidation()}
                    style={{
                      flex: '1',
                      minWidth: '250px',
                      padding: '1rem 1.5rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                  <button
                    onClick={handleValidation}
                    style={{
                      backgroundColor: 'var(--primary-red)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-red-hover)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-red)'}
                  >
                    <Shield size={20} />
                    Verify Certificate
                  </button>
                </div>
              </div>

              {validationResult && (
                <div style={{
                  padding: '1.5rem',
                  borderRadius: '10px',
                  border: `2px solid ${validationResult.type === 'success' ? '#28a745' : '#dc3545'}`,
                  backgroundColor: validationResult.type === 'success' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                  marginBottom: validationResult.type === 'success' ? '2rem' : '0'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: validationResult.type === 'success' ? '1.5rem' : '0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {validationResult.type === 'success' ? 
                        <CheckCircle size={24} style={{ color: '#28a745' }} /> :
                        <MessageSquare size={24} style={{ color: '#dc3545' }} />
                      }
                      <span style={{ 
                        color: validationResult.type === 'success' ? '#28a745' : '#dc3545',
                        fontWeight: '600',
                        fontSize: '1.1rem'
                      }}>
                        {validationResult.message}
                      </span>
                    </div>
                    <button 
                      onClick={resetSearch}
                      style={{ 
                        background: 'transparent', 
                        border: 'none', 
                        color: 'inherit',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        borderRadius: '4px'
                      }}
                    >
                      ×
                    </button>
                  </div>

                  {/* Download Buttons - Only show for valid certificates */}
                  {validationResult.type === 'success' && validationResult.data && (
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => handleViewCertificate(validationResult.data.driveLink)}
                        style={{
                          backgroundColor: '#28a745',
                          color: 'white',
                          border: 'none',
                          padding: '1rem 2rem',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          flex: '1',
                          minWidth: '200px',
                          justifyContent: 'center'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                      >
                        <ExternalLink size={20} />
                        View Certificate
                      </button> 
                      {/* <button
                        onClick={() => handleDownloadCertificate(validationResult.data.driveLink)}
                        style={{
                          backgroundColor: '#007bff',
                          color: 'white',
                          border: 'none',
                          padding: '1rem 2rem',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          flex: '1',
                          minWidth: '200px',
                          justifyContent: 'center'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                      >
                        <Download size={20} />
                        Download PDF
                      </button> */}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Admin Section */}
      <section className="section-padding" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(126, 58, 65, 0.1), rgba(45, 45, 45, 0.05))',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <User size={48} style={{ color: 'var(--primary-red)', marginBottom: '1rem' }} />
              <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '1rem' }}>
                Administrator Access
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Access the admin panel to manage certificates, view analytics, and oversee the verification system
              </p>
            </div>

            {!isAdminLoggedIn && !showAdminLogin && (
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => setShowAdminLogin(true)}
                  style={{
                    backgroundColor: 'var(--primary-red)',
                    color: 'white',
                    border: 'none',
                    padding: '1.25rem 2.5rem',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-red-hover)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-red)'}
                >
                  Admin Login
                </button>
              </div>
            )}

            {showAdminLogin && !isAdminLoggedIn && (
              <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '2.5rem',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '1px solid #e9ecef'
                }}>
                  <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', color: '#2d2d2d', marginBottom: '2rem' }}>
                    Admin Login
                  </h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <input
                      type="text"
                      placeholder="Username"
                      value={adminCredentials.username}
                      onChange={(e) => setAdminCredentials({...adminCredentials, username: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                  <div style={{ marginBottom: '2rem' }}>
                    <input
                      type="password"
                      placeholder="Password"
                      value={adminCredentials.password}
                      onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button 
                      onClick={handleAdminLogin}
                      style={{
                        flex: '1',
                        backgroundColor: 'var(--primary-red)',
                        color: 'white',
                        border: 'none',
                        padding: '1rem',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-red-hover)'}
                      onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-red)'}
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => setShowAdminLogin(false)}
                      style={{
                        flex: '1',
                        backgroundColor: 'transparent',
                        color: '#666',
                        border: '2px solid #e9ecef',
                        padding: '1rem',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#f8f9fa';
                        e.target.style.borderColor = '#dee2e6';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#e9ecef';
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <small style={{ color: '#888', fontSize: '0.9rem' }}>
                      {/* Demo credentials: admin / admin123<br />
                      Try certificate numbers: ZD2025001, ZD2025002 */}
                    </small>
                  </div>
                </div>
              </div>
            )}

            {isAdminLoggedIn && (
              <div>
                {/* Admin Statistics */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                  gap: '2rem',
                  marginBottom: '3rem'
                }}>
                  {[
                    { value: certificates.length, label: 'Total Certificates', color: 'var(--primary-red)' },
                    { value: certificates.filter(c => c.status === 'Valid').length, label: 'Valid Certificates', color: '#28a745' },
                    // { value: certificates.filter(c => c.status === 'Expired').length, label: 'Expired Certificates', color: '#ffc107' },
                    // { value: new Set(certificates.map(c => c.course)).size, label: 'Active Courses', color: '#17a2b8' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '15px',
                        textAlign: 'center',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        border: '1px solid #e9ecef',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{ fontSize: '2.5rem', fontWeight: '700', color: stat.color, marginBottom: '0.5rem' }}>
                        {stat.value}
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2d2d2d', margin: '0' }}>
                        {stat.label}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Admin Table */}
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ 
                    backgroundColor: 'var(--primary-red)', 
                    color: 'white',
                    padding: '1.5rem 2rem'
                  }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0' }}>
                      Certificate Management
                    </h2>
                  </div>
                  
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                          {['Certificate #', 'Intern Name', 'Course', 'Completion Date', 'Status'].map((header) => (
                            <th key={header} style={{
                              padding: '1rem',
                              textAlign: 'left',
                              fontWeight: '600',
                              color: '#2d2d2d',
                              borderBottom: '2px solid #e9ecef'
                            }}>
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {certificates.map((cert) => (
                          <tr key={cert.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                            <td style={{ padding: '1rem', color: 'var(--primary-red)', fontWeight: '600' }}>
                              {cert.certificateNumber}
                            </td>
                            <td style={{ padding: '1rem', color: '#2d2d2d', fontWeight: '500' }}>
                              {cert.internName}
                            </td>
                            <td style={{ padding: '1rem', color: '#666' }}>{cert.course}</td>
                            <td style={{ padding: '1rem', color: '#666' }}>{cert.completionDate}</td>
                            <td style={{ padding: '1rem' }}>
                              <span style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                backgroundColor: cert.status === 'Valid' ? '#d4edda' : '#fff3cd',
                                color: cert.status === 'Valid' ? '#155724' : '#856404'
                              }}>
                                {cert.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                  <button 
                    onClick={() => {
                      setIsAdminLoggedIn(false);
                      setAdminCredentials({ username: '', password: '' });
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#666',
                      border: '2px solid #e9ecef',
                      padding: '1rem 2rem',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#f8f9fa';
                      e.target.style.borderColor = '#dee2e6';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderColor = '#e9ecef';
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

      <style>{`
        :root {
          --primary-red: #7e3a41ff;
          --primary-red-hover: #884a51ff;
        }
        
        * {
          box-sizing: border-box;
          margin:0px;
        }
        
        button:focus,
        input:focus {
          outline: none;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .section-padding {
            padding: 3rem 0 !important;
          }
          
          .section-title {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Certifications;