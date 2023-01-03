import { useState } from 'react';
import './App.css';
import Home from './home/home';

export interface User {
  name: string | null,
  id: number | null
}


const App = () => {
  const [userName, setUserName] = useState<string | null>(null)
  const [userID, setUserID] = useState<number | null>(null)

  const user: User = {
    name: userName,
    id: userID
  }

  return (
    <div className="App">
      <header className="App-header">
        <Home setNameFunction={setUserName} setIDFunction={setUserID} user={user} />
      </header>
    </div>
  );
}

export default App;
