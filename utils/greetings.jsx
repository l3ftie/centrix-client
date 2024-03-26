const getGreetingTextTime = () => {
  let text = "";
  let time = new Date().getHours();
  if (time >= 0 && time <= 11) {
    text = "Good Morning";
  } else if (time >= 12 && time < 16) {
    text = "Good Afternoon";
  } else if (time >= 16 && time <= 24) {
    text = "Good Evening";
  }
  return text;
};

export default getGreetingTextTime;
