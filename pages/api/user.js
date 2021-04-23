import users from "../../users";

// /api/user?username=SEARCH_FOR_USERNAME
export default function handler(req, res) {
  const { username } = req.query;
  const user = users.find(
    (user) => (user.first_name + user.last_name).toLowerCase() === username
  );
  if (!user) {
    return res.status(404).json({ error: "Not found user: " + username });
  }

  res.status(200).json(user);
}
