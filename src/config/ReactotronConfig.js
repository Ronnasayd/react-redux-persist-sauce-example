import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

let reactotron;
if (process.env.NODE_ENV === "development") {
  reactotron = Reactotron.configure().use(reactotronRedux()).connect();
}
export default reactotron;
