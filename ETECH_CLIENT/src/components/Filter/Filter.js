import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";

import "./styles.css";

const Filter = ({ setFilter }) => {
  const data = useSelector((state) => state.posts);
  const onFilterSelection = (event) => {
    const filter = event.target.id;
    console.log(event.target);
    if (
      filter === "darbs" ||
      filter === "andele" ||
      filter === "atdod" ||
      filter === "pasakumi" ||
      filter === "pasākumi"
    ) {
      const filteredResults = data.filter((post) =>
        post.tags.some((tag) => tag.includes(filter))
      );
      setFilter(filteredResults);
    } else {
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
