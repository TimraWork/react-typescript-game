import logoSrc from '../assets/img/rs_school_js.svg';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Footer = () => (
  <footer>
    <IconButton color="primary" href="https://github.com/TimraWork" target="_blank">
      <GitHubIcon />
    </IconButton>
    <div className="copyright">&copy; 2021</div>
    <a href={'https://rs.school/react/'} className="footer-logo" target="_blank">
      <img src={logoSrc} alt="" className="footer-logo__img" />
    </a>
  </footer>
);
