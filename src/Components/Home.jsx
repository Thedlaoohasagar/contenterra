import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [matter, setMatter] = useState([]);
  const getData = async () => {
    const data = await fetch("https://www.reddit.com/r/reactjs.json");
    const response = await data.json();
    setMatter(response.data.children);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home">
      {matter &&
        matter.map((e) => {
          return <Card data={e.data} />;
        })}
    </div>
  );
};

export default Home;
