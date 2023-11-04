const Input = ({
  label,
  type = "text",
  required,
  name,
  helperText,
  value,
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        type={type}
        required={required}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {helperText && <span>{helperText}</span>}
    </div>
  );
};

export default Input;
