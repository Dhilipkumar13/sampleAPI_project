import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import ShowDetails from './Components/ShowDetails';
import NotFound from './Components/NotFound';
import { useNavigate, Route, Routes} from 'react-router-dom';
import ViewController from './Components/ViewController';
import ItemColumn from './Components/ItemColumn';
import ItemList from './Components/ItemList';
const API_URL='https://dummyjson.com/users'

function App() {

  const [items,setItems] = useState([]);
  const [searchItems,setSearchItems] = useState([]);
  const navigate = useNavigate();
  const [selectedItem,setSelectedItem]=useState('');
  const [columnView,setColumnView]=useState(true);
  const [listView,setListView] = useState(false)

  useEffect(()=>{
    const fetchItem = async() =>{
      try{
        const response = await fetch(API_URL)

        if(!response.ok) throw Error("Data not Recived")

        const listItem= await response.json()

       // console.log(listItem)
        setItems(listItem)
        setSearchItems(listItem)
      }
      catch(err)
      {
        
      }finally{            
      }
    }
    setTimeout(()=>fetchItem())
  },[])

  const handleShowDetails = (detail) => {  
    // console.log(detail) 
    setSelectedItem(detail);
    // console.log(selectedItem)
    navigate(`/details/${detail.id}`)
  }


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); // Convert query to lowercase for case-insensitive matching
    
    const filteredItems = items.users.filter((item) =>
      item.firstName.toLowerCase().includes(query) // Check if query is a substring
    );
    
    setSearchItems(query === '' ? items.users : filteredItems);
  };

  const handleNavHome = () => {
    navigate('/')
  }

  const changeToColumn = () =>{
    setColumnView(true);
    setListView(false);
    console.log("columnView")
  }

  const changeToList = () =>{
    setColumnView(false)
    setListView(true)
    console.log("listView")
  }

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ width: '1400px' }}>
        
      <NavBar handleSearch={handleSearch} handleNavHome={handleNavHome}  changeToList={changeToList} changeToColumn={changeToColumn} />  
        <Routes>
          <Route path='/' element={ <>
                 {columnView&&<ItemColumn items={items } handleShowDetails={handleShowDetails} /> }
                 {listView&&<ItemList items={items } handleShowDetails={handleShowDetails} />}
          </>}/>
          <Route path='/details/:id'element={<ShowDetails selectedItem={selectedItem}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
