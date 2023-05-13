import { createStyles } from "@mantine/core";
import { ReactElement, ReactNode } from "react";

import { Header } from "./Header";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.black,
    width: "100%",
  },

  child: {
    backgroundColor: theme.colors.mainGrey,
    padding: theme.spacing.md,
  },
}));

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps): ReactElement => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.child}>{children}</div>
    </div>
  );
};
