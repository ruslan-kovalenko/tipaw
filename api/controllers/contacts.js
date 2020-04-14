const Contacts = require("../../models/contacts");

exports.orders_get_all = (req, res, next) => {
    Contacts.find()
            .exec()
            .then(contacts => {
                res.json(contacts)
            })
            .catch(err => next(err));
};
    
exports.orders_create = (req, res, next) => {
    const contact = new Contacts(req.body);

    contact
        .save()
        .then(() => res.json(contact))
        .catch(err => next(err));
};
