import "./contact.scss";
const cssPrefix = "contact";

const Contact = () => {
  return (
    <div className={`${cssPrefix}`}>
      <div className={`${cssPrefix}__description`}>
        If you have any questions or just want to say hi, please send us an
        e-mail to hello@foodBlog.com or use the contact form below.{" "}
      </div>
      <div className={`${cssPrefix}__container`}>
        <form action="">
          <div className={`${cssPrefix}__formrow`}>
            <label htmlFor="fname">Your name</label><br></br>
            <input type="text" id="fname" name="fname" value="" /><br></br>
          </div>
          <div className={`${cssPrefix}__formRow`}>
            <label htmlFor="fname">Subject</label><br></br>
            <input type="text" id="subject" name="subject" value="" /><br></br>
          </div>
          <div className={`${cssPrefix}__formRow`}>
            <label htmlFor="fname">Email</label><br></br>
            <input type="text" id="email" name="email" value="" /><br></br>
          </div>
          <div className={`${cssPrefix}__formrow`}>
            <label htmlFor="fname">Message</label><br></br>
            <textarea id="message" name="message" value="" /><br></br>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
