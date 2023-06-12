import React, { useState } from "react";
import AddListing from "./addListing";
import { Button, Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/addButton.css";

export default function AddButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);

    return <AddListing />;

  };

  return (
    <div className="add-btn">
      <Modal
        trigger={
          <Button className="add-btn-stuff" onClick={handleClick}>
            <Button.Content visible className="add-btn-body">
              <FontAwesomeIcon icon={faCirclePlus} />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>Add a Listing</Modal.Header>
        <Modal.Content>
          <AddListing />
        </Modal.Content>
      </Modal>
    </div>
  );
}
