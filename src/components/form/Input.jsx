const Input = ({
  label,
  placeHolder = "",
  width = "full",
  bg = "white",
  rounded,
}) => {
  return (
    <div className="flex gap-1 flex-column border justify-end items-start full py-3">
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeHolder}
        className={`inline-block ${
          rounded ? "rounded" : ""
        }  border-clear h-4 ${width} ${bg}`}
      />
    </div>
  );
};

export default Input;
