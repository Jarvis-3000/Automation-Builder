import React, { useState } from "react";
import NodeContainer from "../components/common/NodeContainer";
import Select from "../components/common/Select";
import NodeHeading from "../components/common/NodeHeading";
import { NODE_TYPES, NOTIFICATION_OPTIONS } from "../utils/constants";
import { Handle, Position } from "reactflow";

export const NotificationNode = ({ id }) => {
  const [notificationTarget, setNotificationTarget] = useState("");

  return (
    <NodeContainer className="w-[300px]">
      <NodeHeading
        heading="Notification"
        type={NODE_TYPES.notification}
        settingsAvailable
        infoAvailable
        infoContent="This is a Notification Terminal Node. If notification source is integrated then the message will be sent"
        id={id}
      />
      <div className="flex flex-col gap-3">
        <Select
          label="Notification Target"
          options={NOTIFICATION_OPTIONS}
          value={notificationTarget}
          onChange={(event) => setNotificationTarget(event.target.value)}
        />
      </div>
      {/*  */}
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
    </NodeContainer>
  );
};
