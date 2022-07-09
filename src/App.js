import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';



function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer />
    <ItemDetailContainer />
    </>  
  );
}



export default App;
