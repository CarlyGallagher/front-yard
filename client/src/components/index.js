import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setLocation("");

  };

  return (
    <div>
      <form className="form">
        <input
          value={title}
          name="title"
          onChange={handleInputChange}
          type="title"
          placeholder="title"
        />
         <input
          value={description}
          name="description"
          onChange={handleInputChange}
          type="description"
          placeholder="description"
        />
         <input
          value={price}
          name="price"
          onChange={handleInputChange}
          type="price"
          placeholder="price"
        />
         <input
          value={image}
          name="image"
          onChange={handleInputChange}
          type="image"
          placeholder="image"
        />
        <input
          value={location}
          name="location"
          onChange={handleInputChange}
          type="location"
          placeholder=""
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>  
    </div>
  );
}

export default Form;