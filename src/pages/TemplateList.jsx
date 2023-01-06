import React from "react";
import CompletedCard from "../components/CompletedCard";
import cry from '../asset/cry.gif'

const TemplateList = ({ templates }) => {
  return (
    <div>
      {templates.length ? (
        templates.map((template) => (
          <CompletedCard key={template.id} template={template} />
        ))
      ) : (
        <div className="no__card">
          <h1 >NO SAVED CARDS</h1>
          <img src={cry} alt="" />
          <h4>Please generate cards first</h4>
        </div>
      )}
    </div>
  );
};

export default TemplateList;
