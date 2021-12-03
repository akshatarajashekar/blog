import "./scroll-bar.scss";

const cssPrefix = "scroll-bar";
const ScrollBar = (props: any) => (
  <div className={`${cssPrefix} scroll-bar__light_theme`} style={{ height: `${props.height}`} }>
    {props.children}
  </div>
);
export default ScrollBar;
