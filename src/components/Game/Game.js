import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "../Row/Row";
import {
  openCellAC,
  REMOVEDAC,
  CLOSEAC,
} from "../../redux/actionCreators/gameCreatorComponent";

function Game(props) {
  const dispatch = useDispatch();
  const onegame = useSelector((state) => state.game.oneGame);
  const count = useSelector((state) => state.game.User.count);
  const [bufer, setBufer] = useState([]);

  const checkedBufer = (cell) => {
    setBufer([...bufer, cell]);
    dispatch(openCellAC(cell.id));
  };

  useEffect(() => {
    if (bufer.length === 2) {
      if (bufer[0].color === bufer[1].color) {
        dispatch(REMOVEDAC([bufer[0].id, bufer[1].id]));
      } else {
        dispatch(CLOSEAC([bufer[0].id, bufer[1].id]));
      }
      setBufer([]);
    }
  }, [bufer]);

  return (
    <section className="game">
      <div className="container">
        <div className="game__box">
          <div className="game__round"> <h3>Раунд -</h3> {Math.floor(count / 2)}</div>
          <div className="game__row" style={{ width: "max-content" }}>
            {onegame.map((el) => (
              <Row key={Math.random()} row={el} checkedBufer={checkedBufer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Game;
