import React from 'react' 
import './Filter.css'
const Filter = (props) => {

    let filterData = props.filterData;
    let setCategory = props.setCategory;
    

   
    function filterhandler(title){

      setCategory(title);




      

     
    }

    

  return (
    <div className='filter'>
        {
            filterData.map((data) =>(

                 <button className='btn-filter' onClick={ ()=>filterhandler(data.title) } id='borderline'>{data.title} </button>
            ))
    }
    </div>
  )
}

export default Filter