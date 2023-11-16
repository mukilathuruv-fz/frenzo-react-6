const AppInput = ({ label, type = "text", value, onChange, name }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} value={value} onChange={onChange} name={name} />
    </div>
  );
};

export default AppInput;
