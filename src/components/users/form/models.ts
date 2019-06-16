import { fetchAsync } from "~/utils/axios";
import { createEffect } from "~/utils/effector";

import { $currentUser } from "../../users/table/models";

const url = "http://localhost:5001/api/users";

export const addUser = createEffect("addUser").use(
  (obj: any): any => {
    fetchAsync({
      url,
      method: "POST",
      sendObj: obj
    });
  }
);

$currentUser.on(
  addUser.done,
  (state, { params }: any): any => [...state, params]
);
