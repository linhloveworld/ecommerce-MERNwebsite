import styled from "styled-components";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-item: center;
  gap: 24px;
  justify-content: flex start;
  border-radius: 10px;
  border-bottom: 1px solid red;
  height: 44px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
  &: hover{
    color:#fff;
    background: rgb(13,92,182)
  }`