import styled from '@emotion/styled';

export const FriendList = styled.ul`
  width: ${props => props.theme.spacing(60)};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  margin-left: auto;
  margin-right: auto;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.spacing(1)};
  padding: 20px;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
export const FriendStatus = styled.span`
  width: ${props => props.theme.spacing(5)};
  height: ${props => props.theme.spacing(5)};
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const FriendAvatar = styled.img`
  display: block;
`;
export const FriendName = styled.p`
  font-size: 20px;
`;
