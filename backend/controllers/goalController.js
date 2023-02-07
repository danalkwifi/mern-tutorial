//express-async-handler, simple middleware for handling expceptions inside of async express routes and passing them to your
//exprss error handling (used instead of try and catch )
const asyncHandler = require('express-async-handler')

//@desc Get goals
//@route    GET /api/goals
//@access   Private
const getGoals =  asyncHandler (async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

//@desc SET goal
//@route    POST /api/goals
//@access   Private
const setGoal =  asyncHandler (async (req, res) => {
    if(!req.body.text){ //if there is no body
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set goal'})
})

//@desc Update goals
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler (async (req, res) => {    
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//@desc Delet goals
//@route    DELET /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}
)
module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}