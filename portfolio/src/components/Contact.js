import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      Contact
      <form
        name="contact"
        method="post"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label>
            Your Name:
            <input type="text" name="name" className="form-name" />
          </label>

          <p>
            <label>
              Your Email:
              <input type="email" name="email" className="form-email" />
            </label>
          </p>
        </div>
        <p>
          <label>
            Message:
            <textarea name="message" className="form-message"></textarea>
          </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
