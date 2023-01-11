import React from 'react'
interface separetorProps{
    classList: string;
    text: string;
}
const Separetor:React.FC<separetorProps> = ({classList,text}) => {
  //const listClass=['fa fa-',...classList,'padding-right']
    return (
    <div className="separetor">
    <div className="icon-title">
      <i className={`fa fa-${classList} padding-right`} />
      {text}
    </div>
   
  </div>
  )
}

export default Separetor