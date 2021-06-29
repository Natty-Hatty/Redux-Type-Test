import React from "react";

interface Props {
  name: string;
}
export default function GitTestFile({ name }: Props) {
  return (
    <>
      <p>
        git file test, <span>hiii</span>its not working properly{" "}
        <h1>Developer: {name}</h1>
      </p>

      <p>
        git file test, its not working properly <h1>Developer: {name}</h1>
      </p>
      <p>
      git file test, its not working properly <h1>Developer: {name}</h1>
        git file test, its not working properly <h1>Developer: {name}</h1>
      </p>

     
    </>
  );
}
