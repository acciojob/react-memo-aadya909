import React, { useState } from 'react';

const SkillList = React.memo(({ skills }) => {
  console.log("Rendering SkillList...");
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

function ReactMemoExample() {
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const addSkill = () => {
    if (skillInput.length > 5) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    } else {
      alert("Skill must be more than 5 characters.");
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        type="text"
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} />
    </div>
  );
}

export default ReactMemoExample;
