import styled from '@emotion/styled';

export const Profile = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${props => props.theme.spacing(8)};
  width: 300px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.medium};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;
export const Avatar = styled.img`
  display: block;
  width: ${props => props.theme.spacing(30)};
  height: ${props => props.theme.spacing(30)};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.light};
`;
export const Name = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  color: ${props => props.theme.colors.gray};
`;
export const Location = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${props => props.theme.colors.gray};
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.colors.gray};
  border: 1px solid #a9a9a9;
  background-color: ${props => props.theme.colors.accent};
  padding: 15px;
  width: 100%;
  gap: 10px;
`;
export const ItemLabel = styled.span`
  font-size: 12px;
`;
export const ItemQuantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
`;
