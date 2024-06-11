import { BsFillArchiveFill, BsFillBellFill, BsFillGrid3X3GapFill, BsPeopleFill } from "react-icons/bs"
// import LineCharts from "./charts/LineCharts"
import LineCharts from "./charts/LineCharts";
import BarCharts from "./charts/BarCharts";
import PieCharts from "./charts/PieCharts";



function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>GETWARE TEAMPLATE DESIGN</h3>

      </div>
      <div className="main-cards">
        <div className="card">
        <div className="card-inner">
          <h3>PRODUCTS</h3>
          <BsFillArchiveFill className="card_icon" />

        </div>


        <h1>300</h1>

      </div>
      <div className="card">
        <div className="card-inner">
          <h3>CATEGORIES</h3>
          <BsFillGrid3X3GapFill className="card_icon"/>

        </div>
        <h1>12</h1>

      </div>
      <div className="card">
        <div className="card-inner">
          <h3>CUSTOMERS</h3>
          <BsPeopleFill className="card_icon"/>

        </div>
        <h1>33</h1>

      </div>

      <div className="card">
        <div className="card-inner">
          <h3>ALERTS</h3>
          <BsFillBellFill className="card_icon" />

        </div>
        <h1>41</h1>

      </div>

      </div>

      <div className="charts">

      <BarCharts />
      <LineCharts />
      <PieCharts />
      </div>

    </main>
  )
}

export default Home
