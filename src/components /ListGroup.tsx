function ListGroup() {
  const items = ["New York", "New Jersey", "New Mexico", "California"];
  return (
    <>
      <h1>List</h1>
      {items.map((items) => (
        <li className="list-group-item" key={items}>
          {items}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
