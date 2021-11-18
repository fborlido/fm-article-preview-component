import React, { useState } from "react";
import Drawers from "./assets/images/drawers.jpg";
import Avatar from "./assets/images/avatar.jpg";
import Share from "./assets/images/icon-share.js";

import fb from "./assets/images/icon-facebook.svg";
import pin from "./assets/images/icon-pinterest.svg";
import tw from "./assets/images/icon-twitter.svg";

const App = () => {
  const [banner, setbanner] = useState(false);
  const [deskbanner, setdeskbanner] = useState(false);

  const onShare = (e) => {
    e.preventDefault();
    if (window.innerWidth < 1200) {
      setbanner(true);
    } else {
      setdeskbanner(!deskbanner);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="header">
            <img src={Drawers} alt="Drawers" />
          </div>
          <div className="right">
            <div className="content">
              <p className="title">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </p>
              <p className="text">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
            </div>
            {!banner ? (
              <div className="footer">
                <div className="person">
                  <img src={Avatar} alt="Avatar" />
                  <div className="info">
                    <p className="name">Michelle Appleton</p>
                    <p className="date">28 Jun 2020</p>
                  </div>
                </div>
                <div className="share" onClick={onShare}>
                  <Share fill="#6E8098" />
                </div>
              </div>
            ) : (
              <>
                {window.innerWidth < 1200 && (
                  <div className="share-banner">
                    <div className="share-left">
                      <p className="share-text">share</p>
                      <ul>
                        <li>
                          <a href="/">
                            <img src={fb} alt="fb" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img src={tw} alt="tw" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img src={pin} alt="pin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="share-right"
                      onClick={() => setbanner(false)}
                    >
                      <Share fill="#ffffff" />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          {deskbanner && (
            <div className="desktop-banner">
              <p className="share-text">share</p>

              <a href="/">
                <img src={fb} alt="fb" />
              </a>

              <a href="/">
                <img src={tw} alt="tw" />
              </a>

              <a href="/">
                <img src={pin} alt="pin" />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
