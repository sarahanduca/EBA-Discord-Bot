export default function (msg, nabs) {
  let el;
  let currUser = msg.member.user;

  if (
    nabs.some((e) => {
      el = e;
      return e[0] == currUser.id;
    })
  ) {
    if (currUser.username != el[1]) {
      el[1] = currUser.username;
    }
  } else {
    nabs.push([currUser.id, currUser.username]);
  }

  return nabs;
}
