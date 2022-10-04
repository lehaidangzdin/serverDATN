const Book = require("../models/db_config").book;
const multer = require("multer");
const upload = require("../middleware/fileUpload").single("image");
const cloudinary = require("../middleware/cloudinarySetUp");
const response = require("../helper/response")


class BookController {
    index(req, res) {
        res.send("index book");
    }

    async addBook(req, res, next) {
        try {
            const result = await Book.create({
                name: "Book 002dwe ",
                cloudinary_id: "2d",
            });

            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    updateBook(req, res, next) {
        res.send("updateBook!");
    }

    async deleteBook(req, res, next) {
        try {
            const del = await Book.destroy({
                where: {
                    id: 2,
                },
            });

            if (del === 0) {
                res.send("ok");
            } else {
                res.send("not ok");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAllBook(req, res, next) {
        try {
            const data = await Book.findAll();
            res.send(data);
        } catch (error) {
            console.log(error);
        }
    }

    async uploadBook(req, res, next) {
        try {
            upload(req, res, async function (err) {
                if (err instanceof multer.MulterError) {
                    res.send(err);
                    return;
                } else if (err) {
                    res.send(err);
                    return;
                }
                const result = await cloudinary.uploader.upload(req.file.path);
                res.send({url: result.url});
            });
        } catch (error) {
            console.log(error);
        }
    }

    async testPost(req, res) {
        try {
            if (!req) return res.status(401).send("null params")
            console.log(req.body)
            response.successResponseWithData(res, "message", req.body)
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new BookController();
