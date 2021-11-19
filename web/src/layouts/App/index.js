import Head from "next/head";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  divider: {
    border: "none",
    borderTop: "2px solid #F0F0F0",
    margin: 0,
    maxWidth: 240,
  },
});

const AppLayout = ({ isLoading, title, subtitle, children }) => {
  const classes = useStyles();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div data-testid={`page-${isLoading ? "loading" : "loaded"}`}>
      <Head>
        <title>{title} - Beam Pets</title>
      </Head>
      <main>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <hr className={classes.divider} />
        {children}
      </main>
    </div>
  );
};

AppLayout.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default AppLayout;
