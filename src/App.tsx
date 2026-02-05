import "./App.css";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Card
        img="https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"
        title="Kirbsy bucket"
        date="21-08-2025"
        rating={7}
      ></Card>
      <Footer />
    </>
  );
}

export default App;
