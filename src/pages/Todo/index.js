import React from "react";

import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import deleteSVG from "../../assets/img/delete.svg";
import { Creators as action } from "../../store/todo";

export default function Todo() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  return (
    <Container>
      <Input forwardRef={inputRef} />
      <Button paramRef={inputRef} />
      <nav>
        <ul>
          {todo.map((value, index) => (
            <li key={index}>
              <span>{value}</span>{" "}
              <img
                src={deleteSVG}
                alt="delete"
                onClick={() => {
                  dispatch(action.removeTodo(index));
                }}
              />
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
