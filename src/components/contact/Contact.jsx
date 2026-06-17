import React, {useState} from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <input type="text" name='name' className="form-control" placeholder='Full Name' value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input type="text" name='mobile' className="form-control" placeholder='Phone No.' value={formData.mobile} onChange={handleInputChange} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input type="text" name='email' className="form-control" placeholder='Email' value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input type="text" className="form-control" name="xyz" placeholder='Full Name' value={formData.xyz} onChange={handleInputChange} />
                </div>
                <div className="col-lg-12 col-md-12">
                  <textarea name="enquiry" id="" placeholder='Your Message' value={formData.enquiry} onChange={handleInputChange}></textarea>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className='submit-btn'><button type="submit">send message</button></div>
                </div>
              </div>
            </form>
  )
}

export default Contact
