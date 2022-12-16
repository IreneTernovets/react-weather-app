import React from "react";

export default function Search() {
  return (
    <div class="input-group my-3">
      <input
        type="text"
        class="form-control"
        placeholder="Type a city"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-primary" type="button" id="button-addon2">
        Submit
      </button>
    </div>
  );
}
