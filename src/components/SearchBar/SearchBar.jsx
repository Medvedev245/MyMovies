import { InputWrap, SerchBtn, SpanWrap } from './SearchBar.styled';

export const SearchBar = ({ onSubmit, inputData, queryString, onChange }) => {
  return (
    <SpanWrap onSubmit={onSubmit}>
      <span>
        <InputWrap
          id="movies"
          type="text"
          name="search"
          value={inputData}
          onChange={onChange}
          placeholder="Probably Comedy"
          autoComplete="off"
        />
        <label htmlFor="movies"></label>
      </span>
      <SerchBtn type="submit">Search</SerchBtn>
    </SpanWrap>
  );
};
