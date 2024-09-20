import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/aryan9inja")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);
  return (
    <div className="flex justify-around text-center m-4 bg-gray-600 text-white p-4 text-3xl items-center">
      <img src={data.avatar_url} alt="Git Picture" width={300} />
      Github Followers : {data.followers}
    </div>
  );
}

export default Github;

export const GithubLoaderInfo = async () => {
  const response = await fetch("https://api.github.com/users/aryan9inja");
  return await response.json();
};
