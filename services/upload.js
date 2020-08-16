const AWS      = require('aws-sdk'),
      multer   = require('multer'),
      multerS3 = require('multer-s3');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2'
});

s3 = new AWS.S3();

// create the upload function
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'spivack-family-site',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length); // pop off files extension
            cb(null, Date.now() + ext); // create random string to use as image name and add extension back
        }
    })
})

module.exports = upload;