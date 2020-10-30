import '../App.css';
function SearchBar(props) {


  return (
    <div className="SearchButton">
        <button onClick= {props.submitSearch}>Submit</button>
    </div>
  );
}

export default SearchBar;
