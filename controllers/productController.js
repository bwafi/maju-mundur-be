const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProduct = async (req, res) => {
  const { name, price } = req.body;
  const { userId } = req.user;
  try {
    const product = await prisma.product.create({
      data: { name, price, merchantId: userId },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { merchant: true },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
