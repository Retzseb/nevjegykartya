import { Container } from "./components/Container";
import { NameCardList, users } from "./components/NameCardList";

function App() {

  return (
    //Fragment
    <Container>
    <NameCardList array={users} />
    </Container>
  );
}

export default App;
