 
import React from "react";

const NotFoundMessage = ({ message }: { message: string }) => (
  <div className="flex justify-center items-center min-h-screen">
    <h1>{message}</h1>
  </div>
);

export default NotFoundMessage;
