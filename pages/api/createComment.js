import sanityClient from '@sanity/client';
import nodemailer from 'nodemailer';
import aws from 'aws-sdk';

const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  apiVersion: 'v1',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
};
const client = sanityClient(config);

export default async function createComment(req, res) {
  const { _id, name, email, comment } = JSON.parse(req.body);
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }

  try {
    await warnDevAboutComment(name, email, comment);
  } catch (err) {
    console.error('Could not send email');
  }
  return res.status(200).json({ message: 'Comment submitted' });
}

aws.config.update({
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_ACCESS_SECRET,
  },
  region: 'eu-central-1',
});

async function warnDevAboutComment(name, email, comment) {
  const to = ['dev@coolart.no'];

  const mailOptions = {
    from: 'SeaInvaders <dev@coolart.no>', // sender address
    to, // list of receivers
    // subject: `Workshop request ${data.workshopType}`, // Subject line
    subject: 'Verifiser post på Sea Invaders', // Subject line
    html: `
    <h1>Sea Invaders blir brukt!</h1>
    <p>Bruker ved navn <b>${name}</b> og epost: <b>${email}</b> har skrevet denne kommentaren:</p>
    <p>${comment}</p>
    <br/>
    <a href='https://seainvaders.sanity.studio/'>Verifiser og publiser i Sanity</a>
    `, // email body
    ses: {
      // optional extra arguments for SendRawEmail
      Tags: [
        {
          Name: 'sitedomain',
          Value: 'seainvaders',
        },
      ],
    },
  };

  let transporter = nodemailer.createTransport({
    SES: new aws.SES({
      apiVersion: '2010-12-01',
      region: 'eu-central-1',
    }),
    sendingRate: 1,
  });

  // Push next messages to Nodemailer
  transporter.once('idle', () => {
    if (transporter.isIdle()) {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
          res.status(err.responseCode).send(err.response);
        } else {
          console.log('Message sent');
        }
      });
    }
  });
}
