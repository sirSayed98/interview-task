import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import style from "./Home.module.css";
import Card from "../Card/Card";
import { Animated } from "react-animated-css";

let skip = 0;
let skipAccumulator = 2;
let limit = 5;

const Home = ({ data }) => {
  const router = useRouter();

  const [dataObj, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(data);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (clientHeight + scrollTop >= scrollHeight - 10) {
        setLoading(() => true);
        skip += skipAccumulator;
        axios
          .get(`http://80.240.21.204:1337/news?skip=${skip}&limit=${limit}`)
          .then((res) => {
            setData((prevData) => {
              return [...prevData, ...res.data.news];
            });
            setLoading(() => false);
          });
      }
    });
  }, []);
  return (
    <>
      <div>
        <div className="row mt-3">
          <div
            className={`${style.comVersion} ${style.hide} ${style.left}`}
          ></div>

          <div className={`${style.fixMedia} col mt-5`}>
            {dataObj.map((el) => {
              return (
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}
                  animationInDelay={400}
                >
                  <Card key={el._id} data={el} />
                </Animated>
              );
            })}
          </div>
          <div
            className={`${style.comVersion} ${style.hide} ${style.right} `}
          ></div>
        </div>
      </div>
      {loading && (
        <div className={`${style.loading}`}>
          <div className={`${style.ball}`}></div>
          <div className={`${style.ball}`}></div>
          <div className={`${style.ball}`}></div>
        </div>
      )}
    </>
  );
};

export default Home;
