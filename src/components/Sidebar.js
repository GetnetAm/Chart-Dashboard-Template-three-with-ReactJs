import { BsCart, BsFillArchiveFill, BsFillGearFill, BsFillGrid3X2GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from "react-icons/bs"

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
   <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
    <div className="sidebar-title">
      <div className="sidebar-brand">
        <BsCart className="icon_header"/> GETWARE

      </div>
      <span className="icon close_icon" onClick={OpenSidebar}>X</span>
    </div>

    <ul className="sidebar-list">
      <li className="sidebar-list-item">
        <a href="/">
          <BsGrid1X2Fill className="icon"/>Dashboard

        </a>

      </li>
      <li className="sidebar-list-item">
        <a href="/">
          <BsFillArchiveFill className="icon"/>Prodcuts

        </a>

      </li>
      <li className="sidebar-list-item">
        <a href="/">
          <BsFillGrid3X2GapFill className="icon"/>Categories

        </a>

      </li>
      <li className="sidebar-list-item">
        <a href="/">
          <BsPeopleFill className="icon"/>Customers

        </a>

      </li>
      <li className="sidebar-list-item">
        <a href="/">
          <BsListCheck className="icon"/>Inventory

        </a>

      </li>
      <li className="sidebar-list-item">
        <a href="/">
          <BsMenuButtonWideFill className="icon"/>Reports

        </a>

      </li>
      <li className="sidebar-list-item">
        <a href="/">
          <BsFillGearFill className="icon"/>Setting

        </a>

      </li>

    </ul>

    </aside>
  )
}

export default Sidebar
