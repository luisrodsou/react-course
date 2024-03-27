import React from "react";
import AppProvider from "./AppProvider";
import AppRouter from "./AppRouter";
import NavigationBar from "./views/navigation/NavigationBar";
import SearchModal from "./views/search/SearchModal";

const App: React.FC = () => (
    <AppProvider>
      <NavigationBar />
      <div className="mt-5 mb-5 w-3/4 mx-auto">
        <AppRouter />
      </div>
      <SearchModal />
    </AppProvider>
);

export default App;
