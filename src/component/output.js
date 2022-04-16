/**
 * This is the Output component to show currently translated phrase.
 * @param {string} currentTrans - current translated phrase.
 */

function Output({ currentTrans }) {
  console.log(currentTrans);
  return (
    <div className="row justify-content-center">
      <div className="input-group w-75">
        <div className="d-flex input-group-prepend">
          <span className="input-group-text">Translation</span>
        </div>
        <textarea
          className="form-control"
          aria-label="With textarea"
          value={currentTrans}
          readOnly
          name="translatedValue"
          type="text"
        ></textarea>
      </div>
    </div>
  );
}

export default Output;
