const houses = [
    {
        name: "Летний Уют",
        square: "Площадь: 108м",
        size: "Размер: 7x9",
        constructionPeriod: "Срок постройки: 30 дней",
        cntRooms: "Количество комнат: 12",
        typeHouse: "Тип дома: Одноэтажный",
        price: "Стоимость:от 1780000 руб",
        type: "Одноэтажный"
    },
    {
        name: "Солнечная Роща",
        square: "Площадь: 108м",
        size: "Размер: 7x9",
        constructionPeriod: "Срок постройки: 30 дней",
        cntRooms: "Количество комнат: 12",
        typeHouse: "Тип дома: С мансандрой",
        price: "Стоимость:от 1780000 руб",
        type: "С мансандрой"
    },
    {
        name: "Звездный Уголок",
        square: "Площадь: 108м",
        size: "Размер: 7x9",
        constructionPeriod: "Срок постройки: 30 дней",
        cntRooms: "Количество комнат: 12",
        typeHouse: "Тип дома: С цокольным этажом",
        price: "Стоимость:от 1780000 руб",
        type: "С цокольным этажом"
    },
    {
        name: "Морская Гавань",
        square: "Площадь: 108м",
        size: "Размер: 7x9",
        constructionPeriod: "Срок постройки: 30 дней",
        cntRooms: "Количество комнат: 12",
        typeHouse: "Тип дома: Двухэтажный",
        price: "Стоимость:от 1780000 руб",
        type: "Двухэтажный"
    },
    {
        name: "Вечерний Парк",
        square: "Площадь: 108м",
        size: "Размер: 7x9",
        constructionPeriod: "Срок постройки: 30 дней",
        cntRooms: "Количество комнат: 12",
        typeHouse: "Тип дома: Трехэтажный",
        price: "Стоимость:от 1780000 руб",
        type: "Трехэтажный"
    },
    {
        name: "Белый Замок",
        square: "Площадь: 108м",
        size: "Размер: 7x9",
        constructionPeriod: "Срок постройки: 30 дней",
        cntRooms: "Количество комнат: 12",
        typeHouse: "Тип дома: С панорамными окнами",
        price: "Стоимость:от 1780000 руб",
        type: "С панорамными окнами"
    },
    {
        name: "Серебряный Берег",
        square: "Площадь: 108м",
        size: "Размер: 7x9",
        constructionPeriod: "Срок постройки: 30 дней",
        cntRooms: "Количество комнат: 12",
        typeHouse: "Тип дома: С гаражом",
        price: "Стоимость:от 1780000 руб",
        type: "С гаражом"
    },
]

const wrapper = document.createElement("section");
wrapper.className = "wrapper";

document.body.append(wrapper);

const sectionTitle = document.createElement("h1");
sectionTitle.className = "wrapper__title";
sectionTitle.innerText = "Посмотрите популярные проекты домов";

const navigation = document.createElement("ul");
navigation.className = "navigation";

const cardWrapper = document.createElement("div")
cardWrapper.className = "card-wrapper"



const buttonsName = ["Одноэтажный", "С мансандрой", "Двухэтажный", "С цокольным этажом", "Трехэтажный", "С панорамными окнами", "С гаражом"];

let listButtons = []

for(let i = 0; i < buttonsName.length; i++){
    const navigationItem = document.createElement("li");
    navigationItem.className = "navigation__item";
    navigationItem.innerText = buttonsName[i];
    navigation.append(navigationItem);
    listButtons.push(navigationItem)
}

const buttonsShowAll = document.createElement('li')
buttonsShowAll.className = "navigation__item_show-all"
buttonsShowAll.innerText = "Смотреть все"
navigation.append(buttonsShowAll)
listButtons.push(buttonsShowAll)

wrapper.append(sectionTitle, navigation, cardWrapper);

function createCard(obj){
    const card = document.createElement("article");
    card.className = "card";

    const imageCard = document.createElement("img");
    imageCard.className = "card__bg"
    imageCard.src = "img/bg.png"

    const cardInfo = document.createElement("div")
    cardInfo.className = "card__info"

    const cardInfoBasic = document.createElement("div")
    cardInfoBasic.className = "card__info_basic"

    const cardInfoTitle = document.createElement("h3")
    cardInfoTitle.className = "card__title"
    cardInfoTitle.innerText = obj.name

    const cardSquare = document.createElement("p")
    const tempCardSquare = obj.square.split(":")
    const tempCardSquareB = document.createElement("span")
    tempCardSquareB.className = "card__info_basic_item_b"
    tempCardSquareB.innerText = tempCardSquare[1]
    cardSquare.innerText = `${tempCardSquare[0]}: `
    cardSquare.append(tempCardSquareB)
    cardSquare.className = "card__info_basic_item"

    const cardSize = document.createElement("p")
    const tempCardSize = obj.size.split(":")
    const tempCardSizeB = document.createElement("span")
    tempCardSizeB.className = "card__info_basic_item_b"
    tempCardSizeB.innerText = tempCardSize[1]
    cardSize.innerText = `${tempCardSize[0]}: `
    cardSize.append(tempCardSizeB)
    cardSize.className = "card__info_basic_item"

    const cardPeriod = document.createElement("p")
    const tempCardPeriod = obj.constructionPeriod.split(":")
    const tempCardPeriodB = document.createElement("span")
    tempCardPeriodB.className = "card__info_basic_item_b"
    tempCardPeriodB.innerText = tempCardPeriod[1]
    cardPeriod.innerText = `${tempCardPeriod[0]}: `
    cardPeriod.append(tempCardPeriodB)
    cardPeriod.className = "card__info_basic_item"

    const cardCntRooms = document.createElement("p")
    const tempCardCntRooms = obj.cntRooms.split(":")
    const tempCardCntRoomsB = document.createElement("span")
    tempCardCntRoomsB.className = "card__info_basic_item_b"
    tempCardCntRoomsB.innerText = tempCardCntRooms[1]
    cardCntRooms.innerText = `${tempCardCntRooms[0]}: `
    cardCntRooms.className = "card__info_basic_item"

    cardInfoBasic.append(cardSquare, cardSize, cardPeriod, cardCntRooms)

    const cardInfoType = document.createElement("div")
    cardInfoType.className = "card__info_type"

    const cardType = document.createElement("p")
    cardType.className = "card__info_type_item"
    const tempCardType = obj.typeHouse.split(":")
    const tempCardTypeB = document.createElement("span")
    tempCardTypeB.className = "card__info_type_b"
    tempCardTypeB.innerText = tempCardType[1]
    cardType.innerText = `${tempCardType[0]}: `
    cardType.append(tempCardTypeB)

    const cardPrice = document.createElement("p")
    cardPrice.className = "card__info_type_item"
    const tempCardPrice = obj.price.split(":")

    console.log(tempCardPrice);
    
    const tempCardPriceValue = tempCardPrice[1].split(" ")

    console.log(tempCardPriceValue);
    
    const tempCardPriceB1 = document.createElement("span")
    const tempCardPriceB2 = document.createElement("span")
    tempCardPriceB1.className = "card__info_type_b"
    tempCardPriceB2.className = "card__info_type_b"

    tempCardPriceB1.innerText = `${tempCardPriceValue[0]} `
    tempCardPriceB2.innerText = tempCardPriceValue[2]

    console.log(tempCardPriceB1, tempCardPriceB2);
    

    const tempCardPriceColor = document.createElement("span")
    tempCardPriceColor.className = "card__info_type_green card__info_type_item"
    tempCardPriceColor.innerText = `${tempCardPriceValue[1]} `
    cardPrice.innerText = `${tempCardPrice[0]}: `
    cardPrice.append(tempCardPriceB1, tempCardPriceColor,tempCardPriceB2)

    cardInfoType.append(cardType, cardPrice)
    
    const cardFooter = document.createElement("div")
    cardFooter.className = "card__footer"
    
    const cardButton = document.createElement("button")
    cardButton.className = "card__button"
    cardButton.innerText = "СМОТРЕТЬ ПРОЕКТЫ"
    
    const addInformation = document.createElement("p")
    addInformation.className = "card__add-information"
    addInformation.innerText = "Индивидуальная планировка дома"

    cardFooter.append(cardButton, addInformation)
    
    cardInfo.append(cardInfoTitle, cardInfoBasic, cardInfoType, cardFooter)
    card.append(imageCard, cardInfo)

    return card
}

console.log(listButtons);


for(let i = 0; i < houses.length; i++){
    cardWrapper.append(createCard(houses[i]))
}

for(let i = 0; i < listButtons.length;i++){
    
    listButtons[i].addEventListener('click', function(e){
        e.preventDefault()
        cardWrapper.innerHTML = ''
        houses.filter(function(item){
            if (item.type == listButtons[i].innerHTML){
                cardWrapper.append(createCard(item))
                listButtons[i].style.backgroundColor = "#73B918"
                listButtons[i].style.color = "#FFFFFF"
            }
            else if (listButtons[i].innerHTML == "Смотреть все"){
                cardWrapper.append(createCard(item))
            }
        })

        listButtons.filter((type) => {
            if(type != listButtons[i] && type.innerHTML != "Смотреть все"){
                type.style.backgroundColor = "#EFEFEF"
                type.style.color = "#5C5F66"
            }
        })
    })
}