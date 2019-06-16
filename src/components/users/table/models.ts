import { fetchAsync } from "~/utils/axios";
import { createEffect, createStore } from "~/utils/effector";

const url = "http://localhost:5001/api/users";
export const $currentUser = createStore([]);
export const $isLoading = createStore(false);
export const asyncAction = createEffect("get user").use(() => fetchAsync(url));

asyncAction.watch(params => {
  console.log(params);
});
asyncAction.done.watch(({ result, params }) => {
  console.log("watch done", result);
  console.log("watch done", params);
});
asyncAction.fail.watch(({ error, params }) => {
  console.error("watch fail", params);
  console.error("watch fail", error);
});

$currentUser.on(asyncAction.done, (_, { result }: any) => result.data);
$currentUser.on(asyncAction.fail, () => []);
$isLoading.on(asyncAction, () => true).on(asyncAction.done, () => false);

const callback = (newState: []) => console.log("currentUser", newState);

$currentUser.watch(callback);
