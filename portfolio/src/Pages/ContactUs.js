import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

//background Videos
import glitchEffect from '../assests/Videos/glitchEffect.mp4';




const ContactUs = () => {

  const [formSubmit, setFormSubmit] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formError, setFormError] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { user_name, user_email, message } = formData;
  
    // Validate the form fields
    if (!user_name || !user_email || !message) {
      setFormError('Please fill in all fields');
      return;
    }
  
    emailjs.sendForm('service_0xi9jwq', 'template_ua7ckvq', event.target, 'goVOCoAqSw4rEeUqN')
      .then((result) => {
        console.log(result.text);
        setSubmittedName(user_name); // Store the user_name for the thank-you message
        setFormSubmit(true);
        setFormError('');
        setFormData({ user_name: '', user_email: '', message: '' }); // Clear the form data
  
        setTimeout(() => {
          setFormSubmit(false);
        }, 3000);
      }, (error) => {
        console.log(error.text);
      });
  };
  




  return (
    <section className='relative flex-col flex bg-gray-800 lgs:h-[100vh] w-[100vw]'>

        <div className='flex  bg-gray-800 lgs:h-[20rem] lgs:w-[100vw] mds:w-[100vw] mds:h-[4rem]'/>
            
          

        <div className='flex sms:flex-col mds:flex-col h-auto w-auto'>

        <div className='flex lgs:h-[80vh] lgs:w-[20vw] justify-center items-center sms:mt-12'>
            <h2 className='font-dmsans text-8xl sms:text-6xl text-center text-gray-300 lgs:-rotate-90'>
                    CONTACT ME
            </h2>
        </div>

        <div className='flex h-auto lgs:w-[5vw] justify-center items-center'>
            <div className='flex bg-primary w-0.5 h-3/4'/>
        </div>
                
        <div className='flex h-auto lgs:w-[40vw] items-center justify-center mds:mt-12'>
        <div className='flex lgs:flex-col h-auto w-auto'>
 
                  <form onSubmit={handleSubmit} className="mx-auto  lgs:max-w-xl sms:mt-20 sms:w-[90vw] mds:w-[80vw] p-10 mds:p-12 rounded-2xl bg-fontsecondary bg-opacity-80 z-40"
                  style={{
                    boxShadow:'inset 0px 5px 20px rgba(0,0,0,0.5)'
                  }}>
                            <h2 className='flex lgs:w-[30vw] h-auto text-start font-dmsans text-6xl'>Let's Talk</h2>
                            
                            {formError && <p className="text-red-500">{formError}</p>}
                            
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                              <div className="sm:col-span-2">
                                <label htmlFor="user_name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                <div className="mt-2.5">
                                  <input
                                    type="text"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="sm:col-span-2">
                                <label htmlFor="user_email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <div className="mt-2.5">
                                  <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                <div className="mt-2.5">
                                  <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className='flex w-full h-auto justify-center items-center lgs:mt-5 overflow-hidden'>
                              <button type='submit' className="group relative lgs:h-12 lgs:w-[15vw] sms:w-[45vw] sms:h-[4rem] sms:mt-4 mds:w-[50vw] mds:h-16 overflow-hidden rounded-xl bg-white lgs:text-lg mds:text-md shadow mds:m-5">
                                <div className="absolute inset-0 w-3 bg-gray-900 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span className="relative text-black font-dmsans group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">
                                  Send Message {/* <FontAwesomeIcon icon={faMailForward} alt=' ' className='relative'/> */}
                                </span>
                              </button>
                            </div>
                  </form>



 </div>
        </div>



        <div className='flex h-auto lgs:w-[35vw] mds:w-full mds:mt-6 sms:w-full mds::items-center mds:justify-center'>

                  <div className='flex flex-col h-auto lgs:w-[30vw] sms:w-[100vw] mds:w-[75vw] items-center justify-center sms:mt-4'>

                      <div className='flex flex-col lgs:h-[40vh] lgs:w-[30vw] sms:w-[80vw] sms:h-[25vh] mds:w-[55vw] mds:h-[18rem] bg-secondary items-center justify-center rounded-t-xl border-t-4 border-gray-500'>
                           {formSubmit ? (

                              <div className='flex lgs:h-[35vh] lgs:w-[28vw] sms:h-screen items-center justify-center sms:w-[75vw] mds:w-[50vw] sms bg-gray-200 overflow-hidden'>
                              <div className='flex flex-col bg-gray-800 lgs:w-[20rem] lgs:h-[12rem] sms:w-[60vw] mds:w-[40rem] sms:h-[10rem] items-center justify-center rounded-md' style={{
                                  boxShadow:'inset 0px 5px 20px rgba(0,0,0,0.2) , 0px 5px 20px rgba(0,0,0,0.5)'
                              }}>
                                  <h2 className='font-russoone lgs:text-lg text-blue-500'>
                                  {submittedName.user_name ? `${submittedName.user_name}, Thank you..!` : "Thank you..!"}
                                  </h2>
                                  <h2 className='font-dmsans text-center lgs:w-[15rem] lgs:text-sm text-primary'>
                                  Your message has been sent successfully. I will get back to you soon!
                                  </h2>
                                  <h2 className='font-dmsans text-center lgs:w-[15rem] lgs:text-xs text-primary lgs:mt-4'>
                                  - Osanda
                                  </h2>
                              </div>
                              </div>


                           ) : (

                            <div className='flex lgs:h-[35vh] lgs:w-[28vw] sms:w-[75vw] mds:w-[50vw] mds:h-[15rem] sms bg-gray-200 overflow-hidden'>
                            <video src={glitchEffect} autoPlay loop muted playsInline className='scale-150'/>
                           </div>


                           )}

                      </div>
                      <div className='flex flex-col lgs:h-[1vh] lgs:w-[30vw] sms:w-[80vw] sms:h-[1vh] mds:h-[1rem] mds:w-[55vw] rounded-b-full bg-secondary '/>
                      <div className='flex flex-col lgs:h-[10vh] lgs:w-[10vw] sms:w-[10vw] sms:h-[2rem] mds:w-[5rem] mds:h-[3rem] items-center justify-start  bg-secondary '>
                          <div className='bg-gray-800 h-[5vh] w-[5vw] border-b-8 rounded-b-full'/>
                      </div>
                      <div className='flex flex-col h-[1vh] lgs:w-[20vw] sms:w-[40vw] mds:w-[40vw]  rounded-b-full bg-secondary mds:mb-6'/>

                    

                  </div>
            
       </div>


        </div>



       

       <div className='flex bg-gray-800 lgs:h-[50rem] lgs:w-[100vw] sms:h-[5rem] sms:w-full '/>
                         <div className='hidden absolute lgs:flex -bottom-10   h-auto w-[100vw] z-40 bg-transparent' style={{
                           
       
                         }}>
                          <img src= {'lowerBackground1'} alt=''/>
       
                        </div>
            
    </section>
  )
}

export default ContactUs;
