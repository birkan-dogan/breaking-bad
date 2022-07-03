import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters`);
    //console.log(result);  {data: Array(62), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
    console.log(result.data);
    setItems(result.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
