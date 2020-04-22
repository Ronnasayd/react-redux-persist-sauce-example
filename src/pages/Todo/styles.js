import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  nav {
    margin: 0px 10px;
    ul {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
        min-width: 300px;
        min-height: 40px;
        max-width: 400px;
        padding: 10px 20px;
        border-radius: 6px;
        margin: 3px 0px;
        line-height: 20px;
        font-family: "sans-serif";
        font-size: 12px;
        span {
          max-width: 80%;
        }
        img {
          width: 25px;
          cursor: pointer;
        }
      }
    }
  }
`;
