import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsJustify } from "react-icons/bs";
function Header({OpenSidebar}) {
  return (
   <header className="header">
 
    <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar}/>

    </div>
    <div className="header-left">
        <FaSearch className="icon"/>

    </div>
    <div className="header-right">
        <IoIosNotifications className="icon"/>
        <MdEmail className="icon"/>
        <FaUser className="icon"/>

    </div>
 
   </header>
  )
}

export default Header
