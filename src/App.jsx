import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  // const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop

  return <ItemList />;
}

export default App;
