class Homepage {
    constructor(title, menu) {
        this.title = title;
        this.menu = menu;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getMenu() {
        return this.menu;
    }

    setMenu(menu) {
        this.menu = menu;
    }
}


class Menu {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    setItems(items) {
        this.items = items;
    }
}


class MediaQuery {

    constructor(maxWidth, minWidth, orientation) {
        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
        this.orientation = orientation;
    }

    getMaxWidth() {
        return this.maxWidth;
    }

    setMaxWidth(maxWidth) {
        this.maxWidth = maxWidth;
    }

    getMinWidth() {
        return this.minWidth;
    }

    setMinWidth(minWidth) {
        this.minWidth = minWidth;
    }

    getOrientation() {
        return this.orientation;
    }

    setOrientation(orientation) {
        this.orientation = orientation;
    }
}


class Login {

    constructor(title, form) {
        this.title = title;
        this.form = form;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getForm() {
        return this.form;
    }

    setForm(form) {
        this.form = form;
    }
}


class Form {

    constructor(name, email, password, phone) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }
}


class Field {

    constructor(type, name, label) {
        this.type = type;
        this.name = name;
        this.label = label;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getLabel() {
        return this.label;
    }

    setLabel(label) {
        this.label = label;
    }
}

var interface = {
    accessHome(){
        

    },
    seeMenu(){},
    navMenu(){},
    accessLogin(){},
    sendForm(){
        function fillForm(){}
        function getData(){}
    },
    Responsive(){}
};

var banco = {
    
};