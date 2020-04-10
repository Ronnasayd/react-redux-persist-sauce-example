import React from "react";

import { ButtonContainer } from "./styles";
import { Creators as action } from "../../store/todo";
import { useDispatch } from "react-redux";

export default function Button({ paramRef }) {
  const dispatch = useDispatch();
  return (
    <ButtonContainer
      onClick={() => {
        if (paramRef.current.value !== "") {
          dispatch(action.addTodo(paramRef.current.value));
          paramRef.current.value = "";
        }
      }}
    >
      Adicionar
    </ButtonContainer>
  );
}
