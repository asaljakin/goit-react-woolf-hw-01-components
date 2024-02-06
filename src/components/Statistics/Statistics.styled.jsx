import styled from '@emotion/styled';

export const CardStatistics = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.theme.spacing(125)};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #575757;
  background-color: #ffffff;
  padding: 30px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  width: 100px;
  border: 1px solid #a9a9a9;
`;
export const Label = styled.span`
  font-size: 14px;
`;
export const Percentage = styled.span``;
