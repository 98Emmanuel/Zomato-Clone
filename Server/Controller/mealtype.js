const Meal = require ('../Model/mealtypeDB')

exports.getMealType = (req, res) => {

    Meal.find()

    .then( response => {
        res.status(200).json({
            message : 'Mealtype fetched successfully',
            mealtype : response
        })
    
    })

    .catch(err => {
        res.status(500).json({error:err});
    })
       
}

exports.getMealtypeById = (req, res) => {

    const { mealId } = req.params;
    
    Meal.findById(mealId)
        .then(response => {
            res.status(200).json({
                message: "Meal By Id Fetched Successfully",
                mealtype: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

