import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/header";
import RouterIndex from "../router/index";
import ScrollBar from "../shared/scroll-bar/scroll-bar";
import Footer from "../components/footer/footer";
import { CardListPane } from "../shared/cardListPane";
import { useAppSelector } from "../hooks";
import { useEffect, useState } from "react";

const AppMain = () => {
  const selectedRecipie = useAppSelector(
    (state) => state.recipieDetailStore.selectedRecipieName
  );

  const [selectedStorageName, setSelectedStorageName] = useState('');
  useEffect(() => {
    const recipieSelectedFromSession = localStorage.getItem("recipieName") || '';
    const name: string = localStorage.getItem("recipieName") !== ""
    ? recipieSelectedFromSession
    : selectedRecipie || '';
    setSelectedStorageName(name);
  }, [selectedStorageName, selectedRecipie]);

  return (
    <div className="App">
      <ScrollBar>
        <div className="AppContainer">
          <Router>
            <Header />
            <CardListPane
              title={selectedStorageName === null ? "" : selectedStorageName}
              skewLine={false}
            />
            <RouterIndex />
            <div className={"flexbox__flex"}></div>
            <Footer></Footer>
          </Router>
        </div>
      </ScrollBar>
    </div>
  );
};

export default AppMain;
