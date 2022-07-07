import * as React from "react";
import Avatar from "@mui/material/Avatar";

/**
 * UserAvatar: Avatar component for user
 * @params {name} name of the user
 */

export default function UserAvatar({ name }) {
  return <Avatar alt={name} src="/static/images/avatar/1.jpg" />;
}
