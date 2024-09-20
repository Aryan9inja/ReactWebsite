import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="text-center font-bold bg-slate-600 p-4 text-lg text-orange-600">
      {" "}
      User : {userId}
    </div>
  );
}

export default User;
