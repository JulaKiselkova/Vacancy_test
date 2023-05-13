import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors?.white,
    maxWidth: "100%",
    width: "100%",
    height: "84px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  child: {
    padding: theme.spacing.lg,
    borderRadius: theme.radius.sm,
    color: theme.colors.mainBlue,
    pointer: "cursor",
    margin: 0,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    textDecoration: "none",
  },
  box: {
    display: "flex",
    padding: theme.spacing.xl,
    position: "relative",
    right: "550px",
  },
  title: {
    display: "flex",
    padding: theme.spacing.xl,
    position: "relative",
    left: theme.spacing.xxl,
  },
  name: {
    marginLeft: "8px",
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 600,
  },
}));
