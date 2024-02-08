import styled from '@emotion/styled';

export const List = styled.ul`
  width: ${props => props.theme.spacing(60)};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  margin-left: auto;
  margin-right: auto;
`;
