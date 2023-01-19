import React from "react";
import { iconTypes } from "./components/Icon/index.context";

import { ReactComponent as Article } from "./icons/ic_article.svg";
import { ReactComponent as Calendar } from "./icons/ic_calendar.svg";
import { ReactComponent as Idea } from "./icons/ic_idea.svg";

export default {
  ic_article: {
    Component: Article,
  },
  ic_calendar: {
    Component: Calendar,
  },
  ic_idea: {
    Component: Idea,
  },
} as Record<string, iconTypes>;
