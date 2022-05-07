import React from "react";
import { useForm } from "react-hook-form";

export default function StudentAddForm() {
//   console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      fetch('http://localhost:3000/api/v1/students', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
    .then(response => response.json())

    console.log(data);
  };
  // watch input value by passing the name of it
  
  console.log(watch("firstName"));

  return (
    <div className="container-fluid bg-secondary bg-opacity-10 pb-5 pt-4">
      <div className="row">
        <div className="col-6">
          <h2 className="text-success"> Add New Student</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                className="fw-light form-select form-select-lg mb-3"
                id="name"
                name="name"
                placeholder="Jonas"
                {...register("name", {
                  pattern: /[A-Za-z]/,
                  minlength: 2,
                  maxlength: 40,
                  required: true
                  })}
              />
              {errors.name && (
                <span className="text-danger fw-light">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">
                Surname
              </label>
              <input
                type="text"
                className="fw-light form-select form-select-lg mb-3"
                id="surname"
                name="surname"
                placeholder="Jonaitis"
                {...register("surname", {
                  pattern: /[A-Za-z]/,
                  minlength: 2,
                  maxlength: 40,
                  required: true
                  })}
              />
              {errors.surname && (
                <span className="text-danger fw-light">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="town" className="form-label">
                Town
              </label>
              <input
                type="text"
                className="fw-light form-select form-select-lg mb-3"
                id="town"
                name="town"
                placeholder="Miestas"
               {...register("town", {
                 minlength: 2,
                 maxlength: 40,
                 pattern: /[A-Za-z]/,
                 required: true
                 })}
              />
              {errors.town && (
                <span className="text-danger fw-light">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="birthdate" className="form-label">
              Birthdate
              </label>
              <input
                type="date"
                className="fw-light form-select form-select-lg mb-3"
                id="birthdate"
                name="birthdate"
                {...register("birthdate", { required: true })}
                placeholder="MMMM-mm-dd"
              />
              {errors.birthday && (
                <span className="text-danger fw-light">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="program" className="form-label">
                Program
              </label>
        
              <select {...register("program")} className="form-select form-select-lg mb-3 fw-light">
              <option selected>Open this select menu</option>
              <hr/>
              <option value="JavaScript">JavaScript</option>
              <option value="Java">Java</option>
              <option value="PHP">PHP</option>
              <option value="Testuotojas">Testuotojas</option>
               {/* {data.map( item => {
                 return <option key={item.id} value={item.program}>{item.program}</option>
               })} */}
              </select>
        
              {errors.program && (
                <span className="text-danger fw-light">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="group" className="form-label">
                Group
              </label>
        
              <select {...register("group")} className="form-select form-select-lg mb-3 fw-light">
              <option selected>Open this select menu</option>
              <hr/>
              <option value="JS/21">JS/21</option>
              <option value="PHP/21">PHP/21</option>
              <option value="Java/21">Java/21</option>
              <option value="Testuotojas/21">Testuotojas/21</option>
               {/* {dataGroup.map( itemGroup => {
                 return <option key={itemGroup.id} value={itemGroup.group}>{itemGroup.group}</option>
               })} */}
              </select>
        
              {errors.group && (
                <span className="text-danger fw-light">This field is required</span>
              )}
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  
  );
}
