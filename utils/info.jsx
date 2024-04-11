import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../assets/theme";

export const countryInfo = [
  {
    id: 1,
    name: "south africa",
    iso: "ZA",
    code: "+27",
    flagpath: require("../assets/images/south-africa.png"),
  },
  {
    id: 2,
    name: "united kingdom",
    iso: "GB",
    code: "+44",
    flagpath: require("../assets/images/united-kingdom.png"),
  },
  {
    id: 3,
    name: "zimbabwe",
    iso: "ZW",
    code: "+263",
    flagpath: require("../assets/images/zimbabwe.png"),
  },
  {
    id: 4,
    name: "botswana",
    tag: "BW",
    code: "+267",
    flagpath: require("../assets/images/botswana.png"),
  },
  {
    id: 5,
    name: "canada",
    iso: "CA",
    code: "+1",
    flagpath: require("../assets/images/canada.png"),
  },
  {
    id: 6,
    name: "australia",
    iso: "AU",
    code: "+61",
    flagpath: require("../assets/images/australia.png"),
  },
  {
    id: 7,
    name: "United States of America",
    iso: "US",
    code: "+1",
    flagpath: require("../assets/images/united-states.png"),
  },
];

export const planType = [
  {
    id: 1,
    name: "traditional",
    price: 80,
    description:
      "Wood caskets are the most basic style of caskets. They are very simple and eco-friendly and can be made entirely or mostly from hard or softwood. You’ll need a wooden casket if you or your loved one is being cremated",
    relationShip: false,
    casketType:
      "https://i0.wp.com/in-valhalla.com/wp-content/uploads/2020/11/Copper-Andover-Series-Titan-Caskets-e1598117375455-edited-1.jpg?resize=768%2C432&ssl=1",
    busBenefit: "34 Seater",
  },
  {
    id: 2,
    name: "classical",
    price: 150,
    description:
      "Stainless steel coffins are more resilient than those made of carbon steel. They are also less prone to corrosion. The stainless steel exterior can be covered with a veneer of wood to get the same wood casket appearance.",
    relationShip: false,
    casketType:
      "https://i0.wp.com/in-valhalla.com/wp-content/uploads/2020/11/Bronze-Titan-Reflection-Series-1-e1598195790352-edited.png?resize=768%2C433&ssl=1",
    busBenefit: "34 Seater, and catering",
  },
  {
    id: 3,
    name: "executive",
    price: 240,
    description:
      "With the growing awareness of environmental issues, green or eco-friendly caskets have become increasingly popular. These caskets are made from biodegradable materials such as bamboo, willow, or even recycled paper. They symbolize a return to nature and a commitment to preserving the environment.",
    relationShip: false,
    casketType:
      "https://i0.wp.com/in-valhalla.com/wp-content/uploads/2020/11/OrionBlack_A_1024x10242x-edited.png?resize=768%2C480&ssl=1",
    busBenefit: "Full services",
  },
];

export const actions = [
  {
    id: 1,
    name: "Payment",
    to: "",
    icon: <AntDesign name="creditcard" size={24} color={COLORS.primaryBlue} />,
  },
  {
    id: 2,
    name: "Account",
    to: "",
    icon: <AntDesign name="idcard" size={24} color={COLORS.primaryBlue} />,
  },
  {
    id: 3,
    name: "Beneficiary",
    to: "",
    icon: <AntDesign name="addusergroup" size={24} color={COLORS.primaryBlue} />,
  },
  {
    id: 4,
    name: "Claim",
    to: "",
    icon: <AntDesign name="addfile" size={24} color={COLORS.primaryBlue} />,
  },
];

export const recentActivities = [
  {
    id: 1,
    activityType: "payment",
    title: "Policy Payment",
    time: new Date(),
    amount: 34,
    desc: "Policy payment",
  },
  {
    id: 2,
    activityType: "claim",
    title: "Claim Submission",
    time: new Date(),
    amount: 400,
    desc: "Claim submission",
  },
  {
    id: 3,
    activityType: "payment",
    title: "Policy Payment",
    time: new Date(),
    amount: 40,
    desc: "Policy payment",
  },
  {
    id: 4,
    activityType: "payment",
    title: "Policy Payment",
    time: new Date(),
    amount: 50,
    desc: "Policy payment",
  },
];
