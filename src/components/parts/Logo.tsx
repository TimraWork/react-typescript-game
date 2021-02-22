import logoSrc from '../../assets/img/rs_school_js.svg';

export const Logo = () => (
  <a href={'/'} className="logo">
    <img src={logoSrc} alt="" className="logo__img" />
    <span className="logo__text">
      <span className="logo__title">React game</span>
    </span>
  </a>
);
