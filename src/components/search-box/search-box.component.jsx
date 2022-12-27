import './search-box.styles.css'

const SearchBox = (props) => {
    <input className={`search-box ${props.className}`}
        type='search'
        placeholder={props.placeHolder}
        onChange={props.onSearchChangeHandler} />
}

export default SearchBox;