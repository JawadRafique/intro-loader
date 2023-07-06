import { styled } from "styled-components";
import Loader from "./components/Loader";

function App() {
    return (
        <AppContainer>
            <Loader />;
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    color: #000000;
    position: relative;
`;
