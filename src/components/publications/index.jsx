/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";

import * as C from "./style";

export function Publications() {
  return (
    <C.Container>
      <Typography>Publicações</Typography>

      <C.ContainerPublications>
        {Array.from(Array(20)).map((item, index) => (
          <C.Content>
            <C.PublicationImage
              src="https://avatars.githubusercontent.com/u/143969312?v=4"
              alt="img  profile"
            />
            <InfoProfile />
          </C.Content>
        ))}
      </C.ContainerPublications>
    </C.Container>
  );
}
