const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.status(200).render('shop', {prods: products, pageTitle: 'SHOP', path:'/', hasProducts: products.length > 0})
}