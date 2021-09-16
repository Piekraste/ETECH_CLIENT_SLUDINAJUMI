import React from "react";
import { Button, ButtonGroup } from '@mui/material';
import { useSelector } from "react-redux";

import "./styles.css";

const Filter = ({ setFilter }) => {
  const data = useSelector((state) => state.posts);
  const onFilterSelection = (event) => {
    // const CONDITION_ONE = "darbs"; 
    const filter = event.target.offsetParent.id; // "darbs"

    if (filter === "darbs" ||filter === "andele" || filter === "atdod" || filter === "pasakumi" || filter === "pasākumi") {
      const filteredResults = data.filter((post) =>
        post.tags.some((tag) => tag.includes(filter))

        // post.tags.some((tag) => tag === filter)
      );
      console.log(filteredResults);
      setFilter(filteredResults);
      console.log("Setup done");
    } else {
      console.log(data);
      setFilter(data);
    }
  };

  return (
    <ButtonGroup
      variant="contained"
     aria-label="contained primary button group"
      className={"filter__margin"}
    >
      <Button id={null} onClick={onFilterSelection}>
        #VISI
      </Button>
      <Button id="darbs" onClick={onFilterSelection}>
        #DARBS
      </Button>
      <Button id="andele" onClick={onFilterSelection}>
        #ANDELE
      </Button>
      <Button id="atdod" onClick={onFilterSelection}>
        #ATDOD
      </Button>
      <Button id="pasākumi" onClick={onFilterSelection}>
        #PASĀKUMI
      </Button>
    </ButtonGroup>
  );
};

export default Filter;
