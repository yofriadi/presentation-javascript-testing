const faker = require('faker');

const gender = ['Male', 'Female'];

const profile = {
  sms_token: faker.random.number(),
  sms_token_sent_at: faker.date.recent(),
  last_verified_phone_number: faker.phone.phoneNumberFormat(),
  phone_verified_at: faker.date.past(),
  gender: gender[Math.round(Math.random())],
  birthday: faker.date.past(),
  phone_number: faker.phone.phoneNumberFormat(),
  country_code: '+62',
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName()
};
