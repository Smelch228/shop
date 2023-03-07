const setCategory = id => {
    switch (id) {
        case 0:
            return "PC";
        case 1:
            return "Laptop";
        case 2:
            return "Smartphone";
        case 3:
            return "TV";
        case 4:
            return "Console";

    }
}

export default setCategory;