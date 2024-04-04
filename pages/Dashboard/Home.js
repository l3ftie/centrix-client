import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../assets/theme";
import { useAppContext } from "../../context/appContext";
import AccountDashboard from "./components/AccountDashboard";
import ActivateAccount from "./components/ActivateAccount";

const Home = () => {
  const { user } = useAppContext();
  const { planState } = user;

  console.log(planState);

  return (
    <SafeAreaView style={{ padding: SIZES.medium }}>
      {planState ? <ActivateAccount /> : <AccountDashboard user={user} />}
    </SafeAreaView>
  );
};

export default Home;
