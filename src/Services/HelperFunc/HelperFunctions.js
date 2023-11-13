export function getAvatar(User, username) {
  return User?.find((val) => val.username === username)?.avatar;
}
export function getDate(date) {
  const date1 = new Date(date);
  const dateText = date1.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return dateText;
}
