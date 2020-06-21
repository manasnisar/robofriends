import React from 'react';
import '../Styles/App.css';
import "./Card";
import CardList from "./CardList";
import robots from "./robots";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import { useState , useEffect } from "react";
import "tachyons";

const App = () => {

  const [data, setData] = useState(robots);
  const [search, setSearch] = useState("");

  const onSearchChange = (event) =>{
    setSearch(event.target.value);
  }
  const filteredRobots = data.filter(robot =>{
    return robot.name.toLowerCase().includes(search.toLowerCase());
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respose => respose.json())
    .then(users => setData(users));
  })

  return (
    <div className="tc">
      <h1 className="f1">Robo Friends</h1>
      <SearchBox searchChange = {onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
  );
}
export default App;
 