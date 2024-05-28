import { useState } from "react";

import { Button, Flex, Typography } from "../../style";
import * as C from "./style";

export function Stories() {
  const [showAll, setShowAll] = useState(false);

  const numberArray = showAll ? 20 : 8;

  function handleShowAll() {
    setShowAll(!showAll);
  }

  return (
    <Flex padding="8px 20px" align="start" gap="4px">
      <Typography weight="400" size="18px" height="21px">
        Stories
      </Typography>
      <Flex align="end">
        <Button onClick={() => handleShowAll()}>
          <Typography size="14px">
            {showAll ? "Ver menos" : "Ver mais"}
          </Typography>
        </Button>

        <C.Container>
          {Array.from(Array(numberArray)).map((item, index) => (
            <C.Profile key={index}>
              <img
                src="https://avatars.githubusercontent.com/u/143969312?v=4"
                alt="img  profile"
              />
            </C.Profile>
          ))}
        </C.Container>
      </Flex>
    </Flex>
  );
}
