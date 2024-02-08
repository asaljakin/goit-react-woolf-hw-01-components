import {
  FriendAvatar,
  FriendName,
  FriendStatus,
  ListItem,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <FriendStatus status={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
};
