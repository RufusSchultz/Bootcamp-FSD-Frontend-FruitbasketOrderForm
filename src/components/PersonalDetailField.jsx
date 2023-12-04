
function PersonalDetailField({ title, inputType, inputName, inputId, inputValue, handleChange, placeholder }) {

    return(
        <>
            <label htmlFor={inputId}>{title}</label>
            <input
                type={inputType}
                name={inputName}
                id={inputId}
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </>
    )
}

export default PersonalDetailField;