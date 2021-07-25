export const filterQuery = ({ gameLists, query }) =>
  gameLists &&
  gameLists.filter(
    ({ Topic, Group, Level }) =>
      Topic.includes(query) || Group.includes(query) || Level.includes(query)
  );
