import React from "react";

import { ReactComponent as Continents } from "./svg/continents.svg";
import { ReactComponent as Continents4C } from "./svg/continentsForClipping.svg";
import { ReactComponent as Header } from "./svg/header.svg";
import { HeadQuarters } from "./features/headQuarters/HeadQuarters";
import { PolluterNames } from "./features/polluterNames/PolluterNames";
import { HQConnectors } from "./features/hqConnectors/HQConnectors";

import smokeVideo from "./media/Smoke.mp4";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="container">
          <Header />
          <PolluterNames />
          <Continents />
          <Continents4C style={{left: 0}}/>
          <HeadQuarters />
          <HQConnectors />
        </div>

        {
          /*
           * For video masking
           */
          //
        }

        <video
          className="widelo"
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
          // controls={false}
          // controlsList={string;}
          // crossOrigin={string;}
          // mediaGroup={string;}
          // preload={string;}
          // src={string;}
          // height={number | string;}
          // poster={string;}
          // width={number | string;}
          // disablePictureInPicture={true}
        >
          <source src={smokeVideo} type="video/mp4" />
        </video>

        <svg width="0" height="0">
          <defs>
            <clipPath id="myClip">
              <circle cx="100" cy="100" r="40" />
              <circle cx="60" cy="60" r="40" />
            </clipPath>
          </defs>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 285 80"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              {/* <rect x="0" y="0" width="100%" height="100%" /> */}

              <Continents
              // className='continents' fill="green"
              // width="300px" height="300px"  viewBox="0 0 120 120"
              />
              {/* <text x="72" y="50">OCEAN</text> */}
            </mask>
          </defs>
          {/* <rect className="rekted" x="0" y="0" width="100%" height="100%" /> */}
        </svg>

        {/* <video src={smokeVideo} type="video/mp4" /> */}
        {/*
        <video autoplay playsinline muted loop preload
          poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
          <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
          <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
        </video>
        */}
      </header>
    </div>
  );
}

export default App;
