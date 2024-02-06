import {
  Avatar,
  Description,
  ItemLabel,
  ItemQuantity,
  Location,
  Name,
  Profile,
  Stats,
  StatsItem,
  Tag,
} from './Profile.styled';

export const GenerateProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <Name>{username}</Name>
        <Tag className="tag">{'@' + tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{stats.followers}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{stats.views}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{stats.likes}</ItemQuantity>
        </StatsItem>
      </Stats>
    </Profile>
  );
};
