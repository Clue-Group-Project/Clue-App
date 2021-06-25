import { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import Accuse from "./Accuse";
import { SocketContext } from "../context/SocketContext";

const Suggestion = (props) => {
  const { endTurn, currentRoom, active, proofmsg, activeAccuse, waiting, setWaiting } = useContext(
    SocketContext
  );
  const {
    suggest,
    setSuggest,
    accuse,
    setAccuse,
    selectedSuspect,
    selectedRoom,
    selectedWeapon,
    setSuggestAccuse,
  } = props;


  const handleEndTurn = () => {
    setWaiting(false)
    setSuggest(false);
    setSuggestAccuse(false);
    endTurn();
  };

  const handleAccuse = () => {
    setAccuse(true);
  };

  return (
    <Modal
      isOpen={activeAccuse || proofmsg ? true : false}
      className="suggestModal"
    >
      <div>
        <p className="suggestText">
          {proofmsg
            ? proofmsg
            : "No one could prove your suggestion incorrect. Would you like to accuse?"}
        </p>
        {activeAccuse ? (
          <button onClick={handleEndTurn}> End Turn </button>
        ) : null}
        {!proofmsg ? <button onClick={handleAccuse}> Accuse </button> : null}
        <Accuse
          accuse={accuse}
          setAccuse={setAccuse}
          selectedSuspect={selectedSuspect}
          selectedRoom={selectedRoom}
          selectedWeapon={selectedWeapon}
          setSuggestAccuse={setSuggestAccuse}
        />
      </div>
    </Modal>
  );
};

export default Suggestion;
