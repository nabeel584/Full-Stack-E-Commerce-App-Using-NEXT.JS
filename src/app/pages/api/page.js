import connectToDB from '../../lib/db';
import Demo from '../../../../models/model';

export default function handle(req, res) {
  console.log('Connecting to db');
  connectToDB();
  console.log('Connected to db');
  res.status(200).json({ name: 'nabeel' });
}
