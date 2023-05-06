export function NewSkillForm({newSkill, handleSkillInputChange, handleFormSubmit, onOptionChangeHandler}) {
    const options = [1, 2, 3, 4, 5];

    return (
        <form className="new-skill-form" onSubmit={handleFormSubmit}>
        <div className="form-row">
          <label htmlFor="skill">New Skill</label>
          <input 
          type="text" 
          id="skill"
          value={newSkill}
          onChange={handleSkillInputChange} 
          />
        </div>
        <label>Level</label>
        <select onChange={onOptionChangeHandler}>
              {options.map((option, index) => {
                return <option key={index}> 
                {option} 
                </option>
              })}
          </select>
        <button className="btn">Add Skill</button>
      </form>
    )
}