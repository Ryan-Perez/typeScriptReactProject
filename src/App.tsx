import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/list"

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setpeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>People Invited to my Part</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
