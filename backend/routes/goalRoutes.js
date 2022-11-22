const express = require ('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal,
} = require('../controllers/goalController') 

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)
module.exports = router
//router.get('/', getGoals)
/* (req, res) => {
    res.status(200).json({ message: 'Get goals'}) */


//router.post('/',setGoal)
/* (req, res) => {
    res.status(200).json({ message: 'Set goal'})
}) */

//router.put('/:id', updateGoal)


/* (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
}) */

//router.delete('/:id',deleteGoal)


/* (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
})
 */

