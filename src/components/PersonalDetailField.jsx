
function PersonalDetailField({ title, inputType, inputName, inputId, handleChange, placeholder }) {

    return(
        <>
            <label htmlFor={inputName}>{title}</label>
            <input
                type={inputType}
                name={inputName}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={placeholder}
            />
        </>
    )
}

export default PersonalDetailField;