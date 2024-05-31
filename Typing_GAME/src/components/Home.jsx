/* eslint-disable react/prop-types */
import backgroundImage from "../assets/laptop.jpeg";

const Home = ({ onGame }) => {
  return (
    <div>
      <div className="home">
        <div className="content">
          <div className="title">
            TYPING GAME
          </div>
          <div className="auther">
            Coding & Typing <br />
            React Js && Node Js 
          </div>
          <button className="btnPlay" onClick={() => onGame('playGame')}>
            Play Game
          </button>
        </div>
      </div>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background-image: url(${backgroundImage});
          background-size: cover; /* Adjusted background-size */
          background-repeat: no-repeat; /* Prevents repeating the image */
          background-position: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .content {
          margin-bottom: 100px; /* Adds margin to the bottom */
          margin-left: 20px; /* Adds margin to the bottom */
          text-align: center; /* Centers the content horizontally */
        }
      `}</style>
    </div>
  )
}

export default Home;
