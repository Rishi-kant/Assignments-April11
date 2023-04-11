
import { useEffect, useState } from 'react';
import './App.css';
import  axios from 'axios';
//https://jsonplaceholder.typicode.com/posts

function App() {
  const[data,setData]=useState([])
  console.log(data)
  
  async function FetchData(){
  const users =await axios.get("https://jsonplaceholder.typicode.com/posts")
  setData(users.data)
  
  }
  useEffect(()=>{
   FetchData()
  },[])

  function handleDelete(ind){
    const newData= data.filter((ele,index)=>{
      return ind !==index
    })
    setData(newData)
      
  }

  return (
    <div>
       <table>
        <thead>
           <tr>
             <th>Serial </th>
             <th>User Id</th>
             <th>Title</th>
             <th>Body</th>
             <th>Actions</th>
           </tr>
        </thead>

        <tbody>
          {
            data.map((ele,ind)=>{
              return(
                <tr key={ele.id}>
                  <td>{ind+1}</td>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>{ele.body}</td>
                   <td onClick={()=>{
                    handleDelete(ind)
                   }}>
                    &#x274C;
                    </td>
                    
                </tr>
              )
            })
          }
        </tbody>

       </table>
    </div>
  );
}

export default App;
