const Service = require("../models/Service");

// create service
exports.createService = async (req, res) => {
    try {

    const { title, description, price, image } = req.body;

    const service = new Service({
      title,
      description,
      price,
      image,
      freelancerId: req.user?.id
    });

    await service.save();

    res.status(201).json(service);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};


// get all services
exports.getServices = async (req, res) => {

  try {

    const services = await Service.find().populate("freelancerId", "name email");

    res.json(services);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};


// get single service
exports.getServiceById = async (req, res) => {

  try {

    const service = await Service.findById(req.params.id);

    res.json(service);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};