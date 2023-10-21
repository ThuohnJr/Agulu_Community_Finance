
import ListGroup from './components/ListGroup'


function App() {
    
    let items = ["Nairobi","Kisumu","Mombasa","Nakuru","Kisii"];

const handleSelectItem = (item:string) =>{
  console.log
  (item)
}
  return (
    <>
     <ListGroup items = {items} heading={"Cities"}/>

    </>
  )
}

export default App;
