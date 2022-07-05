import "./footer.scss";

const cssPrefix = "footer";
const Footer = () => {
  return (
    <div className={`${cssPrefix} flexbox`}>
      <div className={`${cssPrefix}__container flexbox`}>
        <div className={`${cssPrefix}__description`}></div>
      </div>
    </div>
  );
};

export default Footer;
