import { Schema, model, models } from 'mongoose';

const demoSchema = new Schema({
  name: String,
  date: Date,
});

const Demo = models.Demo || model('model', demoSchema);

export default Demo;
