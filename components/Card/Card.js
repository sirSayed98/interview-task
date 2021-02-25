import React from "react";
import style from "./Card.module.css";
import dateFormat from "dateformat";

const Card = ({ data }) => {
  return (
    <>
      <div className={`${style.card} border p-3 mt-4`}>
        <div className="d-flex bd-highlight" id="titleDev">
          <div className="p-1 bd-highlight" id="img">
            <img className={`${style.imgClass}`} src={data.source.url}></img>
          </div>
          <div className="pl-1 bd-highlight" id="title">
            <p className={`${style.mainTitle}`}>{data.source.title} </p>
          </div>
          <div className="ml-auto pl-1 bd-highlight" id="logo">
            <div className={`${style.divSvg}`}>
              <i class={`${style.icon} fas fa-wifi`}></i>
            </div>
          </div>
        </div>

        <div id="text">
          <div className="mt-3">
            <p className={`${style.mainText} mb-5`}>{data.title}</p>
            <p className={`${style.date} mt-3`} id="date">
              {dateFormat(data.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </p>
          </div>
        </div>
        <hr />

        <div id="keywords">
          {data.keywords.map((el) => {
            return (
              <button
                key={el._id}
                className={`${style.cardButton} btn mr-2 px-3 mb-2`}
              >
                {el.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
