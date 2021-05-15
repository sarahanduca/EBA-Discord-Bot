export default function (msg, nabs) {
  let sameUser;
  let currUser = msg.member.user;

  if (
    nabs.some((member) => {
      sameUser = member;
      return member[0] == currUser.id;
    })
  ) {
    if (currUser.username != sameUser[1]) {
      sameUser[1] = currUser.username;
    }
  } else {
    nabs.push([currUser.id, currUser.username]);
  }

  return nabs;
}
