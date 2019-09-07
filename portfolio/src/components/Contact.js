import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JangkarBumi"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/zehairawan/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:zehairawan@gmail.com">ZehaIrawan@gmail.com</a>
        </li>
      </ul>
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
