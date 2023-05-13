import { Box, Text } from "@mantine/core";
import { Link } from "react-router-dom";

import { Logo } from "../../../assets/icons";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { useStyles } from "./style";

export const Header = ({}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.title}>
        <Logo/>
        <Text className={classes.name}>Jobored</Text>
      </Box>
      <Box className={classes.box}>
        <Link className={classes.child} to={ROUTE_NAMES.HOME_PAGE}>
          Поиск вакансий
        </Link>
        <Link className={classes.child} to={ROUTE_NAMES.FAVORITES}>
          Избранное
        </Link>
      </Box>
    </Box>
  );
};
