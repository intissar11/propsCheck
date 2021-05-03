import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/Profile';
function App() {
  const information = {FullName:"Mark Zuckerberg",
  bio:`Mark Elliot Zuckerberg (born May 14, 1984) is a former Harvard computer science student who along with a few friends launched Facebook, the world's most popular social network, in February 2004.
  Zuckerberg also has the distinction of being the world's youngest billionaire, which he achieved in 2008 at the age of 24. He was named "Man of the Year" by Time magazine in 2010.
  Zuckerberg currently is the chief executive officer and president of Facebook.`,
};
const clickMe = () => {
  alert(`Profile Name is :${information.FullName}`);
};
return (
    <div className="App">
   <Profile Data={information} handleName={clickMe} defaut="Profile created!"/>
    </div>
  );
}

export default App;
