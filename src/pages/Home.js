import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Countries />
      <p>Page d'accueil de React Countries</p>
    </div>
  )
}

export default Home;
