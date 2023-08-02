import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../redux/actions";
import { Container, Spinner, Alert, ListGroup } from "react-bootstrap";

function UseListPage() {
   const { preloader } = useSelector((state) => state.preloaderReducer)
   const { users, error } = useSelector((state) => state.preloaderReducer)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getUsersAction())
   }, [dispatch])
   return (
      <Container>
         <h1>User list</h1>
         {preloader ? (
            <Spinner animation="border" role="status">
               <span className="visually-hidden">Loading...</span>
            </Spinner>
         ): error ? (
            <Alert variant="banger">Error: {error}</Alert>
         ): (
            <ListGroup>
               {users.map((user) => (
                  <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
               ))}
            </ListGroup>
         )}
      </Container>
   )
}

export default UseListPage