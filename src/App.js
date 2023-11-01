import NavBar from './Components/NavBar'
import Spinning from './Components/Spinning'
import Filter from  './Components/Filter'
import Cards from './Components/Cards'
import './App.css';
import { apiUrl,filterData } from './data';
import { useEffect, useState } from 'react';
import { toast} from 'react-toastify';



function App() {

  const [loading ,setLoading] =useState(true);

  const[courses,setCourses] = useState(null);
  const [category,setCategory] =useState(filterData[0].title);
  async function  fetchData()
  {

    setLoading(true);

    try{

      let response = await fetch(apiUrl);
      let output = await  response.json(); 

    setCourses(output.data);

    }

    catch(error){

      toast.error("network Issue");


    }

    setLoading(false);
  }

  useEffect(()=>{

    fetchData();


  },[]);
  return (
    
      <div className="app">
      <div>

      <NavBar></NavBar>
      </div>
      <div>
      <Filter filterData = {filterData}
      category={category}
      setCategory={setCategory}/>
      
      </div>
      <div>

           {
            loading? (<Spinning></Spinning> ): (<Cards courses ={courses} category={category}></Cards>)
           }

      </div>
      

     
    </div>
  );
}

export default App;
