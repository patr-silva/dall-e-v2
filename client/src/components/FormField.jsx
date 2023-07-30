import PropTypes from "prop-types";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
   
      <div className='flex items-center gap-2'>
        <label
          htmlFor={name}
          className='font-mono block mb-3 text-lg font-medium text-white'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-mono text-xs text-white border border-white py-1 px-2 ml-5 mb-2 rounded-md'
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-700 focus:border focus:border-white text-white rounded-md text-sm outline-none block w-96 p-2'
      />
    </div>
  );
};

FormField.propTypes = {
  labelName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  isSurpriseMe: PropTypes.bool,
  handleSurpriseMe: PropTypes.func,
};

export default FormField;
