import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className="wrapper__content">
                    <Route exact path="/" render={
                        () => <Profile/>}
                    />
                    <Route path="/feed" render={
                        () => <Dialogs
                            dialogsData={props.state}
                            addMessage={props.addMessage}
                            updateMessageText = {props.updateMessageText}
                        />
                    }
                    />
                    <Route path="/news" render={
                        () => <News/>}
                    />
                    <Route path="/friends" render={
                        () => <Friends friendData={props.state.friendData} />}
                    />
                    <Route path="/music" render={
                        () => <Music/>}
                    />
                    <Route path="/settings" render={
                        () => <Settings/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
