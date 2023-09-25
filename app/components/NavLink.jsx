
import * as Scroll from 'react-scroll';
import { Link} from 'react-scroll'
const NavLink = ({ href, title }) => {
  return (
    <Link
    to={href}
    smooth={true}
    offset={-100}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
