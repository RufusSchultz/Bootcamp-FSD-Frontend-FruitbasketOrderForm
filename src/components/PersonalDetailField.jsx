
function PersonalDetailField({ title, inputType, inputName, inputId, inputValue, handleChange, placeholder }) {

    return(
        <div className="personal_detail_field">
            <label htmlFor={inputId}>{title}</label>
            <input
                type={inputType}
                name={inputName}
                id={inputId}
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default PersonalDetailField;