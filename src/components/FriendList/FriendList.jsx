import {
  FriendAvatar,
  FriendList,
  FriendName,
  FriendStatus,
  ListItem,
} from './FriendList.styled';

export const GenerateFriendList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <ListItem key={id}>
            <FriendStatus status={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName className="name">{name}</FriendName>
          </ListItem>
        );
      })}
    </FriendList>
  );
};
