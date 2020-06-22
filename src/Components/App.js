import React from 'react';
import '../Styles/App.css';
import "./Card";
import CardList from "./CardList";
import Scroll from "./Scroll";
import {RobotsContext} from "./RobotsContext";
import {SearchContext} from "./SearchContext";
import SearchBox from "./SearchBox";
import { useEffect , useContext } from "react";
import "tachyons";

const App = () => {

  const [robots, robotDispatch] = useContext(RobotsContext);
  const [search, dispatch] = useContext(SearchContext);

  const onSearchChange = (event) =>{
    dispatch(event.target.value);
  }
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(search.toLowerCase());
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respose => respose.json())
    .then(users => robotDispatch(users));
  },[])

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
 