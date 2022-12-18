import { Provider } from "react-redux";
import store from "./redux/store";


import Movies from './components/movies/Movies';
import { Container} from './AppElements';
import ControlBar from './components/control/ControlBar';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ControlBar/>
        <Movies/>
      </Container>
    </Provider>
  );
}

export default App;
