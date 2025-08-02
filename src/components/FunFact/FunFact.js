import React from "react";
import CountUp from "react-countup";

const funFact = [
  {
    title: "50",
    subTitle: "Projects Delivered",
    Symbol: "+",
    icon: "fi flaticon-projector",
  },
  {
    title: "10",
    subTitle: "Industries Served",
    Symbol: "+",
    icon: "fi flaticon-diamond",
  },
  {
    title: "100",
    subTitle: "Custom Solutions",
    Symbol: "%",
    icon: "fi flaticon-happy",
  },
  {
    title: "5",
    subTitle: "Client Reviews",
    Symbol: "⭐",
    icon: "fi flaticon-medal",
  },
];

const FunFact = (props) => {
  return (
    <section className="fun-fact-section">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="fun-fact-grids clearfix">
              {funFact.map((funfact, fitem) => (
                <div className="grid" key={fitem}>
                  <div className="icon">
                    <div className={funfact.icon}></div>
                  </div>
                  <div className="info">
                    <h3>
                      <span>
                        <CountUp end={funfact.title} enableScrollSpy />
                      </span>
                      {funfact.Symbol}
                    </h3>
                    <p>{funfact.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span id="counter" className="d-none" />
    </section>
  );
};

export default FunFact;
