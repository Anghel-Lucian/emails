import React from "react";

import "./style.css";

export default class EmailView extends React.PureComponent {
  render = () => {
    return (
      <div className="email-view">
        <div className="email-view__meta">
          <div className="email-view__meta__sender-info">
            <div className="sender-image"></div>
            <div className="sender-name">SCHLONG</div>
          </div>
          <div className="email-view__meta__date">
            <i className="fas fa-clock"></i>
            July 23, 2020
          </div>
        </div>
        <div className="email-view__title">You're Hired!</div>
        <div className="email-view__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsam voluptatibus aut, repudiandae est odit, beatae perferendis et
            ratione delectus eum mollitia? Dolores ullam sequi provident harum,
            facere sapiente porro.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsam voluptatibus aut, repudiandae est odit, beatae perferendis et
            ratione delectus eum mollitia? Dolores ullam sequi provident harum,
            facere sapiente porro.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident ipsam voluptatibus aut, repudiandae est
            odit, beatae perferendis et ratione delectus eum mollitia? Dolores
            ullam sequi provident harum, facere sapiente porro.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsam voluptatibus aut, repudiandae est odit, beatae perferendis et
            ratione delectus eum mollitia? Dolores ullam sequi provident harum,
            facere sapiente porro.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident ipsam voluptatibus aut, repudiandae est
            odit, beatae perferendis et ratione delectus eum mollitia? Dolores
            ullam sequi provident harum, facere sapiente porro.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Provident ipsam voluptatibus
            aut, repudiandae est odit, beatae perferendis et ratione delectus
            eum mollitia? Dolores ullam sequi provident harum, facere sapiente
            porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident ipsam voluptatibus aut, repudiandae est odit, beatae
            perferendis et ratione delectus eum mollitia? Dolores ullam sequi
            provident harum, facere sapiente porro.
          </p>
          <p>
            Lorem,
            <br></br>
            Ipsum
          </p>
        </div>
        <div className="email-view__footer footer">
          <div className="email-view__footer__text">
            Click here to{" "}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Reply</a> or{" "}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forward</a>{" "}
            SCHLONG's message
          </div>
          <div className="email-view__footer__icons">
            <div className="icon secondary-icon">
              <i className="fas fa-paperclip"></i>
            </div>

            <div className="icon main-icon">
              <i className="fas fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
