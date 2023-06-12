import React, { useState } from "react";
import AddListing from "./addListing";
import { Button, Icon, Modal } from "semantic-ui-react";
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
          <Button className="add-btn-stuff" animated="fade" onClick={handleClick}>
            <Button.Content visible className="add-btn-body">
              <Icon name="add circle" />
            </Button.Content>
            <Button.Content hidden>
              <Icon name="plus" />
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
