import { BoardInt } from "../interfaces/BoardInt";
import { CoordinateInt } from "../interfaces/CoordinateInt";
import { MoveType } from "../interfaces/MoveInt";
import { isAtDown } from "./boundaries/isAtDown";
import { isAtLeft } from "./boundaries/isAtLeft";
import { isAtRight } from "./boundaries/isAtRight";
import { isAtUp } from "./boundaries/isAtUp";
import { obsAtDown } from "./obstacles/obsAtDown";
import { obsAtLeft } from "./obstacles/obsAtLeft";
import { obsAtRight } from "./obstacles/obsAtRight";
import { obsAtUp } from "./obstacles/obsAtUp";

export const calculateMove = (
  location: CoordinateInt,
  obstacles: CoordinateInt[],
  board: BoardInt
): MoveType => {
  const validMoveList: { [M in MoveType]: boolean } = {
    left: !isAtLeft(location) && !obsAtLeft(location, obstacles),
    right:
      !isAtRight(location, board.width) && !obsAtRight(location, obstacles),
    up: !isAtUp(location, board.height) && !obsAtUp(location, obstacles),
    down: !isAtDown(location) && !obsAtDown(location, obstacles),
  };

  const allMoveArray = Object.entries(validMoveList) as [MoveType, boolean][];
  const validMoveArray = allMoveArray.filter((move) => move[1]);

  const moveIndex = Math.floor(Math.random() * validMoveArray.length);

  const move = validMoveArray[moveIndex][0];
  return move;
};
