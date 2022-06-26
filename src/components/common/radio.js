const Radio = ({ formik, name, lable, id }) => {
  return (
    <div className="flex items-center justify-center gap-x-1">
      <input
        id={id}
        checked={formik.values[name] === (lable)}
        value={lable}
        name={name}
        type={"radio"}
        onChange={formik.handleChange}
        className="w-5 h-5"
      />
      <lable htmlFor={id} >{lable}</lable>
    </div>
  );
}

export default Radio;