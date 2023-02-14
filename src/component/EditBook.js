import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
    const [editUser, setEditUser] = useState(null);
    const { id } =useParams();

    useEffect(() => {
        fetch(`https://63ea487f811db3d7ef0b14c0.mockapi.io/library/${id}`, {
          method: "GET",
        })
          .then((data) => data.json())
          .then((usr) => setEditUser(usr));
      }, [id]);

    
      return editUser ? <EditUserForm editUser={editUser} /> : "Loading...";
}
function EditUserForm({editUser}){
    const [id,setId] = useState(editUser.id)
    const [name,setName] = useState(editUser.name)
    const [year,setYear] = useState(editUser.year)
    const [rating,setRating] = useState(editUser.rating)
    const [summary,setSummary] = useState(editUser.summary)
    const [pages,setPages] = useState(editUser.pages)
    const [stock,setStock] = useState(editUser.stock)
    const navigate = useNavigate();
    return(
        
    <div className='edit-user'>
    <TextField
    value={id}
    id="outlined-basic"
    label="ID"
    variant="outlined"
    onChange={(event) => setId(event.target.value)} />
    <br/><br/>
    <TextField
    value={name}
    id="outlined-basic"
    label="Name"
    variant="outlined"
    onChange={(event) => setName(event.target.value)} />
    <br/><br/>
    <TextField
    value={year}
    id="outlined-basic"
    label="Year"
    variant="outlined"
    onChange={(event) => setYear(event.target.value)} />
    <br/><br/>
    <TextField
    value={rating}
    id="outlined-basic"
    label="Rating"
    variant="outlined"
    onChange={(event) => setRating(event.target.value)} />
    <br/><br/>
    <TextField
    value={summary}
    id="outlined-basic"
    label="Summary"
    variant="outlined"
    onChange={(event) => setSummary(event.target.value)} />
    <br/><br/>
    <TextField
    value={pages}
    id="outlined-basic"
    label="Pages"
    variant="outlined"
    onChange={(event) => setPages(event.target.value)} />
    <br/><br/>
    <TextField
    value={stock}
    id="outlined-basic"
    label="Books Available"
    variant="outlined"
    onChange={(event) => setStock(event.target.value)} />
    <br/><br/>
    <Button 
    variant="contained"
    onClick={()=>{
        const UpdatedUser = {
            id:id,
            name:name,
            year:year,
            rating:rating,
            summary:summary,
            pages:pages,
            stock:stock,
        };
        // console.log(UpdatedUser);
        fetch(`https://63ea487f811db3d7ef0b14c0.mockapi.io/library/${editUser.id}`, {
            method: "PUT",
            body: JSON.stringify(UpdatedUser),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/books"));
    }}
    >
    Save 
    </Button>
    </div>
        
    );
}

export default EditBook;