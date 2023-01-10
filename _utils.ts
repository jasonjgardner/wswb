import { type WssState } from "./types.d.ts";

export function formatPosition(
  state: WssState,
  position: [number, number, number],
  offsetPosition?: [number, number, number],
) {
  const { offset, useAbsolutePosition } = state;
  let [ox, oy, oz] = offset || [0, 0, 0];
  const [x, y, z] = position;
  const [offsetX, offsetY, offsetZ] = offsetPosition || [0, 0, 0];

  if (offsetX) {
    ox += offsetX;
  }

  if (offsetY) {
    oy += offsetY;
  }

  if (offsetZ) {
    oz += offsetZ;
  }

  const [nx, ny, nz] = [x - ox, y - oy, z - oz];

  return useAbsolutePosition ? `${nx} ${ny} ${nz}` : `~${nx} ~${ny} ~${nz}`;
}
