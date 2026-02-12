import Notification from "./Notification";
import * as Images from "./index";

function notiContainer({ data, onRead }) {
  return (
    <div className="grid gap-4">
      {data.map((item) => {
        return (
          <Notification
            key={item.id}
            avatar={Images[item.avatar]}
            userName={item.user_name}
            action={item.action}
            target={item.target}
            targetType={item.target_type}
            time={item.time}
            isUnRead={item.is_unread}
            privateMessage={item.private_message}
            attachedImage={Images[item.attached_image]}
            onRead={() => onRead(item.id)}
          />
        );
      })}
    </div>
  );
}

export default notiContainer;
