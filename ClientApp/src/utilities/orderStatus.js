const setOrderStatus = (id) => {
    switch (id) {
        case 0:
            return "Pending";
        case 1:
            return "Shipped";
        case 2:
            return "Finished";
        case 3:
            return "Cancelled";
    }
};

export default setOrderStatus;
