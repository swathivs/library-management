import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


function BookList() {
  const navigate = useNavigate();
  const headData=["Id","Name","Year","Rating","Summary","Pages","Books Available","Action"];
  const [book, setBook]=useState([])
  const getBook = () => {
    fetch(`https://63ea487f811db3d7ef0b14c0.mockapi.io/library`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setBook(result));
  };
  useEffect(() => getBook(), []);
  return (
    <div>
    <Box height={100} />
    {/* <div>Book List</div> */}
    <div className='container'>
    <h1 className='bookh'>Books List</h1>
    <div className='tab'>
    <table>
    <thead>
      {headData.map((element, index)=>{
        return <th key={index}>{element}</th> 
      })}
    </thead>
    <tbody>
    {book.map((element,index)=>{
           return ( 
        <tr key={index}
        id={element.id} >
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.year}</td>
        <td>{element.rating}</td>
        <td>{element.summary}</td>
        <td>{element.pages}</td>
        <td>{element.stock}</td>
        <td><Button
        onClick={() => {
          navigate(`/books/edit/${element.id}`);
        }}
        >
          <EditIcon/>
        </Button>
        <Button 
        onClick={() => {
          alert("Are you sure you want to delete");
          fetch(`https://63ea487f811db3d7ef0b14c0.mockapi.io/library/${element.id}`,{
            method: 'DELETE'
          }).then(()=>getBook());
        }}
        >
            <DeleteIcon color='error'/>
        </Button></td>
      </tr>
    
      );
    })}
    </tbody>
    </table>
    </div>
    </div>
    </div>
  )
}

export default BookList