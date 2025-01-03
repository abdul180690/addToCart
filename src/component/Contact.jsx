import React , {useEffect} from 'react';
import './contact.css';
import Swal from 'sweetalert2';


const Contact = () => {

    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ddb64faa-9070-4616-b911-424c0b15da48");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
            });
        }
      };

    return (
    <>
        <section className='contact'>
            <div className=''>
                <form onSubmit={onSubmit}>
                    <h2>Contact Us</h2>
                    <div className='line bg-primary'></div>
                    <div className='input-box'>
                        <label>Name</label>
                        <input type="text" className="field" id="name" name="name" required placeholder='Enter Your Full Name'/>
                    </div>
                    <div className='input-box'>
                        <label>Email</label>
                        <input type="email" className="field" id="email" name="email" required placeholder='Enter Your Email Address'/>
                    </div>
                    <div className='input-box'>
                        <label>Message</label>
                        <textarea id="message" className="field mess" cols="50"  rows="10" name="message" required placeholder='Enter Your Message Here!'></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>

        </section>
    </>
    )
}
  
export default Contact