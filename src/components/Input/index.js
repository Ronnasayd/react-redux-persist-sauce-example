import React from "react";

import { InputContainer, Label } from "./styles";

export default function Input({ forwardRef }) {
  return (
    <Label>
      <InputContainer type="text" ref={forwardRef} />
      <div></div>
    </Label>
  );
}
