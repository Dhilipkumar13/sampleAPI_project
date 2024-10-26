  import './App.css';
  import ItemLists from './Components/ItemLists';
  import { useEffect, useState } from 'react';
  import NavBar from './Components/NavBar';
  const API_URL='https://dummyjson.com/users'

  function App() {

    const [items,setItems] = useState([]);
    const [searchItems,setSearchItems] = useState([]);

    useEffect(()=>{
      const fetchItem = async() =>{
        try{
          const response = await fetch(API_URL)

          if(!response.ok) throw Error("Data not Recived")

          const listItem= await response.json()

          setItems(listItem)
          setSearchItems(listItem)
        }
        catch(err)
        {

        }
        finally{
          
        }
      }
      setTimeout(()=>fetchItem(),2000)
    },[])

    const handleSearch = (e) => {

      console.log("serach")

      const query=e.target.value.toLowerCase()

      // console.log(items.users)
      // console.log("dsfsg")
      const filteredItem = items.users.filter((item) => {
        item.firstName.toLowerCase.includes(query)||
        item.lastName.toLowerCase.includes(query)||
        item.maidenName.toLowerCase.includes(query)||
        item.email.toLowerCase.includes(query)
      })

     setSearchItems(filteredItem);
    }
    return (
      <div className="App" style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ width: '1400px' }}>
          <NavBar handleSearch={handleSearch}/>  
          <ItemLists  items={searchItems }/>
        </div>
      </div>
    );
  }

  export default App;
