import {
  GameController,
  LeaderBoardIcon,
  QuestIcon,
  UserIcon,
} from "@/components/sidebar/icons";

export const SidebarList = [
  {
    id: 1,
    pathname: "Quest",
    slug: "/",
    icon: <QuestIcon />,
  },
  {
    id: 2,
    pathname: "Leaderboard",
    slug: "/leaderboard",
    icon: <LeaderBoardIcon />,
  },
  {
    id: 3,
    pathname: "All Games",
    slug: "/all-games",
    icon: <GameController />,
  },
  {
    id: 4,
    pathname: "Profile",
    slug: "/profile",
    icon: <UserIcon />,
  },
];
