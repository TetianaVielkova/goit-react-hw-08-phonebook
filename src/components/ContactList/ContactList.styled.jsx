import styled from "styled-components";

export const List = styled.ul`
`
export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    font-size: 24px;
    font-weight: 500;
`

export const DeleteBtn = styled.button`
  background-color: #f1ee32;
  display: block;
  border-radius: 100px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
&:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
`