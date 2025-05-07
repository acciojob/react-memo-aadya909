import React, { useState } from 'react';

const SkillList = React.memo(({ skills }) => {
  console.log('Rendering SkillList...');
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

function ReactMemo() {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [skillInput, setSkillInput] = useState('');

  const addSkill = () => {
    if (skillInput.trim().length > 5) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    } else {
      alert('Skill must be more than 5 characters.');
    }
  };

  return (
    <div>
      <h1>React.memo</h1>
      <input
        data-testid="skill-input"
        type="text"
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
      />
      <button data-testid="add-skill-btn" onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} />
    </div>
  );
}

export default ReactMemo;
