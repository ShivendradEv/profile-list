import './App.css'
import CreateProfile from './components/CreateProfile'
import EditProfile from './components/EditProfile';
import Navbar from './components/Navbar';
import ProfileList from './components/ProfileList'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProfileList />}></Route>
          <Route path="/create" element={<CreateProfile />}></Route>
          <Route path="/edit/:id" element={<EditProfile />}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
