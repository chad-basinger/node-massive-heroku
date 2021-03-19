module.exports = {
    getItems: (req, res) => {
        //http://localhost:3040/api/items
        const db = req.app.get('db')

        db.get_all_items()
        .then(dbres => {
            res.status(200).send(dbres)
        })
        .catch(err => console.log(err))
    },
    addItem: (req, res) => {
            const db = req.app.get('db')
            const {itemName, itemSize} = req.body;

            db.add_item(itemName, itemSize)
            .then()
            .catch()
    }
}