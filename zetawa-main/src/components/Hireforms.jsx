// import React, { useState } from 'react';
// import img1 from '../assets/vite.png';
// import { Link } from 'lucide-react';
// import Nav from './Nav';

// const Hireforms = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     company: '',
//     website: '',
//     services: [],
//     projectTitle: '',
//     projectDescription: '',
//     projectType: '',
//     timeline: '',
//     budget: '',
//     inspiration: '',
//     additionalInfo: ''
//   });

//   const [selectedServices, setSelectedServices] = useState([]);
//   const [selectedBudget, setSelectedBudget] = useState('');

//   const services = [
//     {
//       id: 'design',
//       icon: '🎨',
//       title: 'Design',
//       description: 'Our web design team has ample years of experience in the core areas of design to build a website that you need.'
//     },
//     {
//       id: 'development',
//       icon: '💻',
//       title: 'Development',
//       description: 'Looking out for customized solutions for your websites? Our team will develop and deliver a website that\'ll serve your purpose.'
//     },
//     {
//       id: 'marketing',
//       icon: '📈',
//       title: 'Marketing',
//       description: 'With researched digital marketing, we will ensure that your business reaches the right audience at the right time.'
//     }
//   ];

//   const budgetOptions = [
//     { id: 'under-5k', label: 'Under Rs5,000' },
//     { id: '5k-10k', label: 'Rs5,000 - Rs10,000' },
//     { id: '10k-25k', label: 'Rs10,000 - Rs25,000' },
//     { id: '25k-50k', label: 'Rs25,000 - Rs50,000' },
//     { id: '50k-plus', label: 'Rs50,000+' },
//     { id: 'discuss', label: 'Let\'s Discuss' }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleServiceToggle = (serviceId) => {
//     setSelectedServices(prev => 
//       prev.includes(serviceId)
//         ? prev.filter(id => id !== serviceId)
//         : [...prev, serviceId]
//     );
//   };

//   const handleBudgetSelect = (budgetId) => {
//     setSelectedBudget(budgetId);
//     setFormData(prev => ({
//       ...prev,
//       budget: budgetId
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

    
//     if (selectedServices.length === 0) {
//       alert('Please select at least one service.');
//       return;
//     }

//     const finalData = {
//       ...formData,
//       services: selectedServices,
//       budget: selectedBudget
//     };

//     alert('Thank you for choosing ZETAWA DARK! We\'ve received your project details and will get back to you within 24 hours.');
//     console.log('Form Data:', finalData);
    
//   };

//   const customStyles = {
//     pageBackground: {
//       background: ' #7e3a41ff',
//       minHeight: '100vh',
//       color: 'white'
//     },
//     formContainer: {
//       background: 'rgba(255, 255, 255, 0.1)',
//       borderColor: 'rgba(255, 255, 255, 0.2)',
//       border: '1px solid rgba(255, 255, 255, 0.2)'
//     },
//     sectionTitle: {
//       color: '#2f2b2bff',
//       borderBottom: '2px solid rgba(80, 75, 75, 0.3)',
//       paddingBottom: '12px'
//     },
//     formInput: {
//       background: 'rgba(254, 253, 253, 0.98)',
//       borderColor: 'rgba(195, 168, 168, 1)',
//       color: '#2f2b2bff',
//       border: '2px solid rgba(255, 255, 255, 0.3)',
//       transition: 'all 0.3s ease',
//       fontSize: '1rem',
//     },
//     submitButton: {
//       background: 'linear-gradient(45deg, #FFE4E1, #FFF0F5)',
//       color: '#8B4B6B',
//       border: 'none',
//       borderRadius: '50px',
//       fontWeight: 'bold',
//       textTransform: 'uppercase',
//       letterSpacing: '1px',
//       transition: 'all 0.3s ease',
//       transform: 'translateY(0)',
//       padding: '1rem 2.5rem',
//       fontSize: '1.1rem'
//     }
//   };

//   const handleInputFocus = (e) => {
//     e.target.style.borderColor = '#FFE4E1';
//     e.target.style.boxShadow = '0 0 20px rgba(255, 228, 225, 0.3)';
//     // e.target.style.background = 'rgba(255, 255, 255, 0.15)';
//   };

//   const handleInputBlur = (e) => {
//     e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
//     e.target.style.boxShadow = 'none';
//     // e.target.style.background = 'rgba(255, 255, 255, 0.1)';
//   };

//   const handleButtonHover = (e) => {
//     // e.target.style.background = 'linear-gradient(45deg, #FFF0F5, #FFE4E1)';
//     e.target.style.transform = 'translateY(-4px)';
//     e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
//   };

//   const handleButtonLeave = (e) => {
//     // e.target.style.background = 'linear-gradient(45deg, #FFE4E1, #FFF0F5)';
//     e.target.style.transform = 'translateY(0)';
//     e.target.style.boxShadow = '0 4px 15px 0 rgba(0, 0, 0, 0.2)';
//   };

//   return (
//     <>
//       <link 
//         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
//         rel="stylesheet" 
//       />
//       <Nav/>
      
//       <div style={customStyles.pageBackground}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 col-lg-8">
//               {/* Header */}
//               <div className="text-center mb-5 pt-5">
//                 <h2 className="display-1 mb-4 fw-light">Hire Our Team</h2>
//                 <p className="fs-4 fw-light" style={{ opacity: '0.9' }}>
//                   Let's Transform Your Vision Into Digital Reality
//                 </p>
//               </div>

//               {/* Form Container */}
//               <div className="p-5" style={customStyles.formContainer}>
//                 <div onSubmit={handleSubmit}>
//                   {/* Contact Information */}
//                   <div className="mb-5">
//                     <h3 className="h2 mb-4" style={customStyles.sectionTitle}>
//                       📋 Contact Information
//                     </h3>
                    
//                     <div className="row g-4 mb-4">
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           First Name <span className="text-info">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           required
//                           placeholder="Enter your first name"
//                           className="form-control"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         />
//                       </div>
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Last Name <span className="text-info">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           required
//                           placeholder="Enter your last name"
//                           className="form-control"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         />
//                       </div>
//                     </div>

//                     <div className="row g-4 mb-4">
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Email Address <span className="text-info">*</span>
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                           placeholder="Enter your email address"
//                           className="form-control"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         />
//                       </div>
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           placeholder="Enter your phone number"
//                           className="form-control"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         />
//                       </div>
//                     </div>

//                     <div className="row g-4">
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Company Name
//                         </label>
//                         <input
//                           type="text"
//                           name="company"
//                           value={formData.company}
//                           onChange={handleInputChange}
//                           placeholder="Enter your company name"
//                           className="form-control"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         />
//                       </div>
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Website URL
//                         </label>
//                         <input
//                           type="url"
//                           name="website"
//                           value={formData.website}
//                           onChange={handleInputChange}
//                           placeholder="https://yourwebsite.com"
//                           className="form-control"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Services Selection */}
//                   <div className="mb-5">
//                     <h3 className="h2 mb-4" style={customStyles.sectionTitle}>
//                       💼 Services Needed <span className="text-info">*</span>
//                     </h3>
                    
//                     <div className="row g-4">
//                       {services.map(service => (
//                         <div key={service.id} className="col-md-4">
//                           <div 
//                             className={`card h-100 Rs{selectedServices.includes(service.id) ? 'border-light' : ''}`}
//                             style={{
//                               background: selectedServices.includes(service.id) 
//                                 ? 'rgba(255, 228, 225, 0.2)' 
//                                 : 'rgba(255, 255, 255, 0.1)',
//                               border: selectedServices.includes(service.id) 
//                                 ? '2px solid #FFE4E1' 
//                                 : '2px solid rgba(255, 255, 255, 0.2)',
//                               borderRadius: '1rem',
//                               cursor: 'pointer',
//                               transition: 'all 0.3s ease'
//                             }}
//                             onClick={() => handleServiceToggle(service.id)}
//                           >
//                             <div className="card-body text-center p-4">
//                               <div className="fs-1 mb-3">{service.icon}</div>
//                               <h5 className="card-title text-white mb-3">{service.title}</h5>
//                               <p className="card-text text-light small">{service.description}</p>
//                               {selectedServices.includes(service.id) && (
//                                 <div className="mt-3">
//                                   <span className="badge rounded-pill" style={{ 
//                                     background: '#FFE4E1', 
//                                     color: '#8B4B6B' 
//                                   }}>
//                                     ✓ Selected
//                                   </span>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Project Details */}
//                   <div className="mb-5">
//                     <h3 className="h2 mb-4" style={customStyles.sectionTitle}>
//                       🚀 Project Details
//                     </h3>
                    
//                     <div className="row g-4 mb-4">
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Project Title <span className="text-info">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="projectTitle"
//                           value={formData.projectTitle}
//                           onChange={handleInputChange}
//                           required
//                           placeholder="Give your project a title"
//                           className="form-control"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         />
//                       </div>
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Project Type
//                         </label>
//                         <select
//                           name="projectType"
//                           value={formData.projectType}
//                           onChange={handleInputChange}
//                           className="form-select"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         >
//                           <option value="">Select project type</option>
//                           <option value="new-website">New Website</option>
//                           <option value="redesign">Website Redesign</option>
//                           <option value="ecommerce">E-commerce</option>
//                           <option value="web-app">Web Application</option>
//                           <option value="mobile-app">Mobile App</option>
//                           <option value="branding">Branding</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div className="mb-4">
//                       <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                         Project Description <span className="text-info">*</span>
//                       </label>
//                       <textarea
//                         name="projectDescription"
//                         value={formData.projectDescription}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Tell us about your project goals, requirements, and vision..."
//                         className="form-control"
//                         rows="5"
//                         style={customStyles.formInput}
//                         onFocus={handleInputFocus}
//                         onBlur={handleInputBlur}
//                       />
//                     </div>
//                   </div>

//                   {/* Budget Selection */}
//                   <div className="mb-5">
//                     <h3 className="h2 mb-4" style={customStyles.sectionTitle}>
//                       💰 Project Budget
//                     </h3>
                    
//                     <div className="row g-3">
//                       {budgetOptions.map(option => (
//                         <div key={option.id} className="col-md-4 col-sm-6">
//                           <div 
//                             className={`card Rs{selectedBudget === option.id ? 'border-light' : ''}`}
//                             style={{
//                               background: selectedBudget === option.id 
//                                 ? 'rgba(255, 228, 225, 0.2)' 
//                                 : 'rgba(255, 255, 255, 0.1)',
//                               border: selectedBudget === option.id 
//                                 ? '2px solid #FFE4E1' 
//                                 : '2px solid rgba(255, 255, 255, 0.2)',
//                               borderRadius: '0.75rem',
//                               cursor: 'pointer',
//                               transition: 'all 0.3s ease'
//                             }}
//                             onClick={() => handleBudgetSelect(option.id)}
//                           >
//                             <div className="card-body text-center p-3">
//                               <span className="text-white fw-medium">{option.label}</span>
//                               {selectedBudget === option.id && (
//                                 <div className="mt-2">
//                                   <span className="badge rounded-pill" style={{ 
//                                     background: '#FFE4E1', 
//                                     color: '#8B4B6B' 
//                                   }}>
//                                     ✓
//                                   </span>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Additional Information */}
//                   <div className="mb-5">
//                     <h3 className="h2 mb-4" style={customStyles.sectionTitle}>
//                       📝 Additional Information
//                     </h3>
                    
//                     <div className="row g-4 mb-4">
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Timeline
//                         </label>
//                         <select
//                           name="timeline"
//                           value={formData.timeline}
//                           onChange={handleInputChange}
//                           className="form-select"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         >
//                           <option value="">Select timeline</option>
//                           <option value="asap">ASAP</option>
//                           <option value="1-month">Within 1 month</option>
//                           <option value="2-3-months">2-3 months</option>
//                           <option value="3-6-months">3-6 months</option>
//                           <option value="6-months-plus">6+ months</option>
//                           <option value="flexible">Flexible</option>
//                         </select>
//                       </div>
//                       <div className="col-md-6">
//                         <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                           Inspiration/Reference
//                         </label>
//                         <input
//                           type="text"
//                           name="inspiration"
//                           value={formData.inspiration}
//                           onChange={handleInputChange}
//                           placeholder="Share any websites or designs you love"
//                           className="form-control"
//                           style={customStyles.formInput}
//                           onFocus={handleInputFocus}
//                           onBlur={handleInputBlur}
//                         />
//                       </div>
//                     </div>

//                     <div className="mb-4">
//                       <label className="form-label fw-medium" style={{ color: '#FFE4E1' }}>
//                         Anything else you'd like to share?
//                       </label>
//                       <textarea
//                         name="additionalInfo"
//                         value={formData.additionalInfo}
//                         onChange={handleInputChange}
//                         placeholder="Any additional requirements, questions, or information..."
//                         className="form-control"
//                         rows="4"
//                         style={customStyles.formInput}
//                         onFocus={handleInputFocus}
//                         onBlur={handleInputBlur}
//                       />
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="text-center">
//                     <button
//                       type="button"
//                       className="btn"
//                       style={customStyles.submitButton}
//                       onClick={handleSubmit}
//                       onMouseEnter={handleButtonHover}
//                       onMouseLeave={handleButtonLeave}

//                     >
//                       Start Our Journey Together
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hireforms;


import React, { useState } from "react";
import Nav from "./Nav";

const Hireforms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    projectTitle: "",
    projectDescription: "",
    projectType: "",
    timeline: "",
    inspiration: "",
    additionalInfo: ""
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  const services = [
    { id: "design", icon: "🎨", title: "Design" },
    { id: "development", icon: "💻", title: "Development" },
    { id: "marketing", icon: "📈", title: "Marketing" }
  ];

  const budgetOptions = [
    { id: "Under Rs5,000", label: "Under Rs5,000" },
    { id: "Rs5,000 - Rs10,000", label: "Rs5,000 - Rs10,000" },
    { id: "Rs10,000 - Rs25,000", label: "Rs10,000 - Rs25,000" },
    { id: "Rs25,000 - Rs50,000", label: "Rs25,000 - Rs50,000" },
    { id: "Rs50,000+", label: "Rs50,000+" },
    { id: "Let's Discuss", label: "Let's Discuss" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    if (!selectedBudget) {
      alert("Please select a budget.");
      return;
    }

    const finalData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.company,
      website: formData.website,
      servicesNeeded: selectedServices,
      projectTitle: formData.projectTitle,
      projectType: formData.projectType,
      projectDescription: formData.projectDescription,
      budget: selectedBudget,
      timeline: formData.timeline,
      reference: formData.inspiration,
      additionalInfo: formData.additionalInfo
    };

    try {
      const res = await fetch("https://zetawa.onrender.com/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData)
      });

      if (res.ok) {
        alert(
          "Thank you for choosing ZETAWA DARK! We have received your project details."
        );

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          projectTitle: "",
          projectDescription: "",
          projectType: "",
          timeline: "",
          inspiration: "",
          additionalInfo: ""
        });
        setSelectedServices([]);
        setSelectedBudget("");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Server error. Please try again later.");
    }
  };

  return (
    <>
      <Nav />
      <div style={{ background: "#7e3a41", minHeight: "100vh", color: "white" }}>
        <div className="container py-5">
          <h1 className="text-center mb-4">Hire Our Team</h1>
          <p className="text-center mb-5">
            Let's Transform Your Vision Into Digital Reality
          </p>

          <form onSubmit={handleSubmit} className="p-5 bg-dark rounded">

            {/* Contact Info */}
            <h3>📋 Contact Information</h3>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Services */}
            <h3 className="mt-4">💼 Services Needed</h3>
            <div className="row mb-4">
              {services.map((s) => (
                <div key={s.id} className="col-md-4">
                  <div
                    className="p-3 border rounded text-center"
                    style={{
                      cursor: "pointer",
                      background: selectedServices.includes(s.id)
                        ? "#ffe4e1"
                        : "transparent",
                      color: selectedServices.includes(s.id)
                        ? "#000"
                        : "#fff"
                    }}
                    onClick={() => handleServiceToggle(s.id)}
                  >
                    <div style={{ fontSize: "2rem" }}>{s.icon}</div>
                    <strong>{s.title}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Details */}
            <h3>🚀 Project Details</h3>
            <input
              className="form-control mb-3"
              placeholder="Project Title"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              required
            />

            <textarea
              className="form-control mb-3"
              placeholder="Project Description"
              name="projectDescription"
              rows="4"
              value={formData.projectDescription}
              onChange={handleInputChange}
              required
            />

            {/* Budget */}
            <h3>💰 Project Budget</h3>
            <div className="row mb-4">
              {budgetOptions.map((b) => (
                <div key={b.id} className="col-md-4 mb-2">
                  <div
                    className="p-2 border rounded text-center"
                    style={{
                      cursor: "pointer",
                      background:
                        selectedBudget === b.id ? "#ffe4e1" : "transparent",
                      color: selectedBudget === b.id ? "#000" : "#fff"
                    }}
                    onClick={() => setSelectedBudget(b.id)}
                  >
                    {b.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <h3>📝 Additional Information</h3>
            <textarea
              className="form-control mb-4"
              placeholder="Anything else you'd like to share?"
              name="additionalInfo"
              rows="3"
              value={formData.additionalInfo}
              onChange={handleInputChange}
            />

            <div className="text-center">
              <button type="submit" className="btn btn-light px-5 py-3">
                Start Our Journey Together
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hireforms;
