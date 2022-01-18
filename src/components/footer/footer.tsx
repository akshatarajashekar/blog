import "./footer.scss";

const cssPrefix = "footer";
const Footer = () => {
  return (
    <div className={`${cssPrefix} flexbox`}>
      <div className={`${cssPrefix}__container flexbox`}>
        <div className={`${cssPrefix}__description`}>Welcome to Food Blog</div>
      </div>
    </div>
  );
};

export default Footer;
