import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const [isVisible, setIsVisible] = useState(false)
  
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  
useEffect(() => {
  setIsVisible(true)
  setTimeout(() => {
    setIsVisible(false)
  }, 5000);
}, [notification])

  if (!isVisible) return <></>
  return <div style={style}>{notification}</div>;
};

export default Notification;
