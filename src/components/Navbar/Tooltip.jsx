import React from 'react';

const Tooltip = ({ classname, icon, text, notify }) => {
  return (
    <div className={` tooltip ${classname}`}>
      <img src={icon} />
      {notify && <div className='missed'>9+</div>}
      <div className='tooltiptext'>{text}</div>
    </div>
  );
};

export default Tooltip;
