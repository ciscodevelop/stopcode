import React from "react";
interface componentProps {
  icon?: string;
  label?: string;
  text?: string;
}
const SingleInfo: React.FC<componentProps> = ({ icon, label,text }) => {
  //const iconClass = ["fa", ...icon,'icon-position'];
  return (
    <div className="container-component">
      <div className="container-info">
        <div className="container-icon-label">
          <span className="label-item">{label}</span>
          <i className={`fa fa-${icon} icon-position`}></i>
        </div>
          
        
        <p className="text-content">{text}</p>
      </div>
    </div>
  );
};

export default SingleInfo;
