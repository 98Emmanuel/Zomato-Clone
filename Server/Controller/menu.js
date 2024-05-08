const Menu = require ('../Model/menuDB')

exports.getMenu = (req, res) => {

    Menu.find()

    .then( response => {
        res.status(200).json({
            message : 'Menu fetched successfully',
            menuItem : response
        })
    
    })

    .catch(err => {
        res.status(500).json({error:err});
    })
}


exports.getMenuByRestaurantId = (req, res) => {
    const { resId } = req.params;

    Menu.find({ restaurantId: resId })
        .then(response => {
            res.status(200).json({
                message: "Menu Fetched Successfully By Restaurant Id",
                menuItem: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

