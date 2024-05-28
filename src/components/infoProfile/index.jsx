import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

import { Flex, Typography } from "../../style";

import * as C from "./style";

export function InfoProfile() {
  return (
    <Flex direction="row" align="center" justify="space-between">
      <C.Container>
        <C.ProfileImage
          src="https://avatars.githubusercontent.com/u/143969312?v=4"
          alt="img  profile"
        />

        <Typography weight="300" size="13px" height="15px">
          Tales
        </Typography>
        <link />
      </C.Container>

      <C.Container>
        <AiFillHeart color="red"/>
        <Typography weight="300" size="13px" height="15px">
          1234
        </Typography>

        <FaRegComment />
        <Typography weight="300" size="13px" height="15px">
          52
        </Typography>
      </C.Container>
    </Flex>
  );
}
