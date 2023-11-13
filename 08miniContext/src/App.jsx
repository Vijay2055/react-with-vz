import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {
  

  return (
   <UserContextProvider>
    <h1>Welcome to my website for Context tutorial</h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
   )
}

export default App
