import React, { useState } from 'react'

const useDropdown = (label, defaultState, options) => {
    // Goal here is to create a "generic", re-useable dropdown component
  const [state, setState] = useState(defaultState)
//   Create a new, unique key

  const id = `use-dropdown-${label.replace(' ', ' ').toLowerCase()}`
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
// on Chagnge, set state to e.targtet.value
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
return [state, Dropdown, setState]
};

export default useDropdown;