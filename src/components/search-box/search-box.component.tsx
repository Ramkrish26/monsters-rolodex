import { ChangeEventHandler } from 'react';
import './search-box.styles.css'

type SearchBoxProps = {
    className: string;
    placeHolder?: string;
    onSearchChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ className, placeHolder, onSearchChangeHandler }: SearchBoxProps) => (
    <input className={`search-box ${className}`}
        type='search'
        placeholder={placeHolder}
        onChange={onSearchChangeHandler} />
);

export default SearchBox;