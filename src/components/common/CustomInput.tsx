type CustomInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  className?: string;
};

const CustomInput = ({
  label,
  placeholder = "",
  value,
  onChange,
  type = "text",
  name,
  className = "",
}: CustomInputProps) => {
  return (
    <div className="w-full flex flex-col-reverse">
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className={`w-full  border-2 border-secondary-5 rounded-lg p-3 text-secondary-2  focus:outline-none focus:ring-2 focus:ring-primary-1  focus:bg-primary-4 peer ${className}`}
        placeholder={placeholder}
      />
      <label
        htmlFor={name}
        className="text-sm mb-2 text-secondary-3 capitalize peer-focus:text-primary-1 peer-focus:font-semibold"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
