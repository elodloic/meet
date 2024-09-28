const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value <= 0) {
      setErrorAlert("Please enter a valid number");
    } else if (value > 32) {
      setErrorAlert("A maximum of 32 is allowed");
    } else {
      setErrorAlert("");
      setCurrentNOE(value);
    }
  };
  return (
    <div id="number-of-events">
      <label>
        Number of Events:
        <input type="number" defaultValue={32} onChange={handleInputChanged} />
      </label>
    </div>
  );
};
export default NumberOfEvents;
