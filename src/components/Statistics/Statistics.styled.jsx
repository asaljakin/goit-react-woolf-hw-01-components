import styled from '@emotion/styled';

export const CardStatistics = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.theme.spacing(125)};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.exlarge};
  text-align: center;
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.white};
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
  width: ${props => props.theme.spacing(25)};
  border: 1px solid #a9a9a9;
  gap: ${props => props.theme.spacing(3)};
  background-color: ${props => props.bgColor};
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
`;
export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
`;
