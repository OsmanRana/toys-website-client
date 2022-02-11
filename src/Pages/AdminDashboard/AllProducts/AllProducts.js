import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";

const AllProducts = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleDelete = (id) => {
    const proced = window.confirm("Confirm Delete");
    if (proced) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const newCollection = toys.filter((toy) => toy._id !== id);
            setToys(newCollection);
          }
        });
    }
  };
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {toys.map((toy) => (
              <TableRow
                key={toy._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {toy.name}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(toy._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="outlined">Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllProducts;
