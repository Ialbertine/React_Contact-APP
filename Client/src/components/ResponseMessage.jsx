import React from "react";

const ResponseMessage = ({ type, content }) => {
  return (
    <div>
      {type === "success" && (
        <p className="px-3 py-2 text-green-700 bg-green-200 rounded-sm">
          {content}
        </p>
      )}
      {type === "error" && (
        <p className="px-3 py-2 text-red-700 bg-red-200 rounded-sm">
          {content}
        </p>
      )}
    </div>
  );
};

export default ResponseMessage;
