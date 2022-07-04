import React from "react";

function MyPersonalDatas() {
  return (
    <div>
      <form>
        <label htmlFor="name">
          Nouveau Pseudo :
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Modifier" />
      </form>
    </div>
  );
}

export default MyPersonalDatas;
