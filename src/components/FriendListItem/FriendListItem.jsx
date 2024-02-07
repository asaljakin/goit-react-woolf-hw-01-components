import {
  FriendAvatar,
  FriendName,
  FriendStatus,
  ListItem,
} from './FriendListItem.styled';

export const GenerateFriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName className="name">{name}</FriendName>
    </ListItem>
  );
};
