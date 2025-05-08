import "./SearchForm.css";

function SearchForm({ cityName, handleCityName, handleSubmit }) {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="city" style={{ display: "none" }}>
          City Name
        </label>
        <input
          id="city"
          type="text"
          value={cityName}
          onChange={(e) => handleCityName(e)}
          placeholder="Enter city name"
        ></input>
        <button type="submit" aria-label="Submit city name">
          Submit
        </button>
      </form>
    </>
  );
}

export default SearchForm;
