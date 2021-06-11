let store = {
    _rerenderEntireComponents() {
        console.log('no subscribers (observers)')
    },
    _state: {
        //values
    },
    getState() {
      return this._state
    },
    subscribe(observer){
        this._rerenderEntireComponents = observer
    },
    addMessage(){
        let newMessage = {
            id: "15",
            text: this._state.newMessageText,
            me: true
        }
        if (this._state.newMessageText !== "") {
            this._state.messageData.push(newMessage);
            this._state.newMessageText = "";
        } else {
            alert("Сообщение пустое")
        }
    },
    updateMessageText(text){
        this._state.newMessageText = text;
        this._rerenderEntireComponents()
    }

}

let state = {
    dialogData: [
        {id: "1", name: "Logan"},
        {id: "2", name: "Jalgas"},
        {id: "3", name: "Ayala"},
        {id: "4", name: "Karinochka"},
        {id: "5", name: "Gulbanu"},
    ],
    messageData: [
        {id: "1", text: "alcogol fu", me: true},
        {id: "2", text: "sigareti fu", me: false},
        {id: "3", text: "paren posmotry na moyu esteticu", me: true},
        {id: "4", text: "laz laz laz dva tli", me: false},
        {id: "5", text: "oshishaisa estetikoy ved ya Danil stepanov", me: false},
        {id: "6", text: "poprobuy posmotry ved ya danil stepanov", me: false},
        {id: "7", text: "china napisal plohoy kod", me: true},
        {id: "8", text: "mestniy vibrozhala", me: false},
        {id: "9", text: "pervyi hahahaha", me: true},
        {id: "10", text: "ya sluchaino udalila element kakoy to", me: false},
        {id: "11", text: "sorry not sorry ya ne hotela", me: false},
        {id: "12", text: "ono samo kak to", me: true},
        {id: "13", text: "ya nazhimala ctrl z no ne poluchilos", me: false},
        {id: "14", text: "ne fortanulo", me: true}
    ],
    newMessageText: "",
    friendData: [
        {id: "1", name: "Dilmash", address: "Kaskelen, d.58"},
        {id: "1", name: "Korinka", address: "Kolsai, d.112"},
        {id: "1", name: "Mahmud", address: "Shynbulak, d.118"},
        {id: "1", name: "Kambar", address: "Tatarstan, d.119"},
    ]
}

let rerenderEntireComponents = () => {
    console.log("State is changed")
}

export let addMessage = () => {
    let newMessage = {
        id: "15",
        text: state.newMessageText,
        me: true
    }
    if (state.newMessageText !== "") {
        state.messageData.push(newMessage);
        state.newMessageText = "";
    } else {
        alert("Сообщение пустое")
    }

    rerenderEntireComponents();
}

export let updateMessageText = text => {
    state.newMessageText = text;
    rerenderEntireComponents();
}

export const subscribe = observer => {
    rerenderEntireComponents = observer
}

export default state
