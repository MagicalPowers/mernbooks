import React from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Notes from "../components/Notes";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(theme => ({
  container: { backgroundColor: "#F2F2F2" }
}));
const Home = () => {
  const [{ data: characters, loading }, getbyname] = useAxios(
    "/api/characters"
  );
  const getseriesbyname = name => {
    console.log("Get series by name!");
    console.log(name);
    API.getseriesbyname(name)
      .then(res => {
        this.setState({ series: res.data });
        console.log("This is the res: ");
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  const classes = useStyles;
  if (loading) {
    return <></>;
  }
  return (
    <div className={classes.container}>
      <br />
      <GridList cols={4}>
        {characters.map(item => (
          <GridListTile
            key={item.name}
            onClick={() => getseriesbyname(item.name)}
          >
            <img src={item.img} alt={item.name} />
            {item.name}
            <GridListTileBar
              title={<Link to={"/series/" + item.name}>{item.name}</Link>}
            />
          </GridListTile>
        ))}
      </GridList>
      <br />
      <Notes></Notes>
    </div>
  );
};

export default Home;
