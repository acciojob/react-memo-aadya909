import React, { useState } from 'react';

const SkillList = React.memo(({ skills }) => (
  <ul>
    {skills.map((skill, i) => <li key={i}>{skill}</li>)}
  </ul>
));

function ReactMemo() {
  const [skills, setSkills] = useState(['HTML', 'CSS']);
  const [input, setInput] = useState('');

  const addSkill = () => {
    if (input.trim().length > 5) {
      setSkills([...skills, input.trim()]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>React.memo</h1>
      <input
        data-testid="skill-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="add-skill-btn" onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} />
    </div>
  );
}

export default ReactMemo;
