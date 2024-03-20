import { useState } from "react";
import { storeData } from "./store";

type OnChangeTurn = (e: React.MouseEvent<HTMLButtonElement>) => void;

export const Square = ({
  num,
  onChangeTurn,
  isTurn,
  isFinished,
  onHandleGame,
}: {
  num: number;
  onChangeTurn: OnChangeTurn;
  isTurn: boolean;
  isFinished: boolean;
  onHandleGame: (win: string) => void;
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-20 h-20 border border-slate-50" id={String(num)}>
      <button
        className="w-full h-full"
        onClick={(e) => {
          if (!clicked) {
            onChangeTurn(e);
            setClicked(true);
            storeData(num, isTurn, onHandleGame);
          }
        }}
        disabled={isFinished}
      ></button>
    </div>
  );
};