import HeaderDropdown from './HeaderDropdown';
import HeaderSub from './HeaderSub';
import cube from './img/cube.png';
import expand_less from './img/expand_less.png';
import user_icon from './img/user_icon.png';

const Header = () => {
  // const backgroundImg = {
  //   backgroundImage: `url(/img/background_img.png)`,
  //   backgroundRepeat: 'no-repeat',
  //   width: '100%',
  //   height: '650px',
  // };
  return (
    <>
      <div className="header_bg">
        <div className="header_flex betweenAlign">
          <img src={cube} alt="" className="cube" />
          <div className="cabinet_menu">
            <img src={expand_less} alt="" />
            <img src={user_icon} alt="" />
          </div>
          {/* <HeaderDropdown /> */}
        </div>
        <HeaderSub />
      </div>
    </>
  );
};

export default Header;
