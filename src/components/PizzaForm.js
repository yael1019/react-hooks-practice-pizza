import React from "react";

function PizzaForm({ form, setForm, handleSubmit }) {
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={ form.topping }
            onChange={ handleChange }
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={ form.size } onChange={ handleChange }>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" value={ form.vegetarian } onChange={ handleChange } >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
