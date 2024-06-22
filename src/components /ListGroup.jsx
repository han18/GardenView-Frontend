import "../list.css";

function ListGroup() {
  const states = ["New York", "New Jersey", "New Mexico", "California"];

  const loggedIn = false;

  return (
    <>
      <h1 className="nav">This is a list!</h1>
      {states.map((land, index) => (
        <ol key={index}>
          <li> {land}</li>
        </ol>
      ))}
      {loggedIn ? "Say Yes" : "Say No"}
    </>
  );
}

export default ListGroup;

{
  /* 
// {items.length && <p>No item list</p>}
//       <ul className="list-group">
//         {items.map((items, index) => (
//           <li
//             className="list-group-item"
//             onClick={(event) => console.log(items, index)}
//             key={items}
//           >
//             {items}
//           </li>
//         ))}
//       </ul> */
}
