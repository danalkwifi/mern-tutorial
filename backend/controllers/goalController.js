//express-async-handler, simple middleware for handling expceptions inside of async express routes and passing them to your
//exprss error handling (used instead of try and catch )
const asyncHandler = require('express-async-handler')
const { findByIdAndUpdate } = require('../models/goalModel')

const Goal = require('../models/goalModel')

//@desc Get goals
//@route    GET /api/goals
//@access   Private
const getGoals =  asyncHandler (async (req, res) => {
    //getting a value from the db, using await since it's a async
    const goals = await Goal.find()

    res.status(200).json(goals)
})

//@desc SET goal
//@route    POST /api/goals
//@access   Private
const setGoal =  asyncHandler (async (req, res) => {
    if(!req.body.text){ //if there is no body
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal)
})

//@desc Update goals
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler (async (req, res) => {  
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true, })
      
    res.status(200).json(updatedGoal)
})

//@desc Delet goals
//@route    DELET /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req. params.id)
 
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id })
}
)
module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}