class Statement {
    constructor(title, image, description, oldPrice, price, button, inCart, tag) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.oldPrice = oldPrice;
        this.price = price;
        this.button = button;
        this.inCart = inCart;
        this.tag = tag;


    }
  
}
class Sales extends Statement {
    constructor(title, image, description, oldPrice, price, button, inCart, tag) {
   super(title, image, description, oldPrice, price, button, inCart, tag)
    }
}


class Decks extends Statement {
    constructor(title, image, description, oldPrice, price, button, inCart, tag) {
super(title, image, description, oldPrice, price, button, inCart, tag)

    }
}

class Wheels extends Statement {
    constructor(title, image, description, oldPrice, price, button, inCart, tag) {
  super(title, image, description, oldPrice, price, button, inCart, tag)

    }
}

class Trucks extends Statement {
    constructor(title, image, description, oldPrice, price, button, inCart, tag) {
    super(title, image, description, oldPrice, price, button, inCart, tag)

    }
}

class Completes extends Statement {
    constructor(title, image, description, oldPrice, price, button, inCart, tag) {
       super(title, image, description, oldPrice, price, button, inCart, tag)

    }
}

class Others extends Statement {
    constructor(title, image, description, oldPrice, price, button, inCart, tag) {
        super(title, image, description, oldPrice, price, button, inCart, tag)

    }
}