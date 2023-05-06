import { useState } from "react";
import { SkillList } from "./SkillList";
import { NewSkillForm } from "./NewSkillForm";
import './index'

export default function App() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('')
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleSkillInputChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (newSkill.trim()) {
      setSkills((prevSkills) => [...prevSkills, {title: newSkill, level:selectedLevel}]);
      setNewSkill('');
    }
  }

  const onOptionChangeHandler = (e) => {
    console.log("User Selected Value - ", e.target.value);
    setSelectedLevel(e.target.value)
  }

  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr/>
      <NewSkillForm
      newSkill={newSkill}
      handleSkillInputChange={handleSkillInputChange}
      handleFormSubmit={handleFormSubmit}
      onOptionChangeHandler={onOptionChangeHandler}
      />
    </>
  )
}