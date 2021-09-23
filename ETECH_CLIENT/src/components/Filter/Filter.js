import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";

import "./styles.css";

const Filter = ({ setFilter }) => {
  const data = useSelector((state) => state.posts);

  const onFilterSelection = (event) => {
    const filter = event.target.id;
    const filteredResults = data.filter((post) =>
      post.tags.some((tag) => tag.includes(filter))
    );
    setFilter(filteredResults);
  };

  return (
    <ButtonGroup
      variant="contained"
      aria-label="contained primary button group"
      className={"filter__margin"}
    >
      <Button id={null} className="btn--hashtag" onClick={onFilterSelection}>
        #VISI
      </Button>
      <Button id="darbs" className="btn--hashtag" onClick={onFilterSelection}>
        #DARBS
      </Button>
      <Button id="andele" className="btn--hashtag" onClick={onFilterSelection}>
        #ANDELE
      </Button>
      <Button id="atdod" className="btn--hashtag" onClick={onFilterSelection}>
        #ATDOD
      </Button>
      <Button
        id="pasākumi"
        className="btn--hashtag"
        onClick={onFilterSelection}
      >
        #PASĀKUMI
      </Button>
    </ButtonGroup>
  );
};

export default Filter;
