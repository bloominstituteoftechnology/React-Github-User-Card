import '../App.css';
function SearchBar(props) {


  return (
    <div className="SearchBar">
      <input type = 'text' value = {props.searching} onChange = {props.updateSearching} placeholder = 'Enter Username . . .'></input>
    </div>
  );
}

export default SearchBar;
