import Notification from "./Notification";
import * as Images from "./index";

function notiContainer({ data }) {
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
          />
        );
      })}
    </div>
  );
}

export default notiContainer;
