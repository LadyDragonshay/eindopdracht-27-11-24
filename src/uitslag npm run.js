Microsoft Windows [Version 10.0.22631.4460]
(c) Microsoft Corporation. Alle rechten voorbehouden.

C:\BED_Final\BED-Final_Booking-Api-004-045>npm run dev

> express-bookings@1.0.0 dev
> nodemon src/index.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
(node:16992) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3001
Database connection successful
info: POST /login. Status: 200. Duration: 14 ms {"service":"booking-api"}
GET /users/:id - Request received: { params: { id: 'e5678901-23f0-1234-5678-9abcdef01234' } }
info: GET /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 9 ms {"service":"booking-api"}
User found: Yes
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: PUT /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 6 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: DELETE /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 6 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
GET /users - Request received: { query: {} }
info: GET /users. Status: 200. Duration: 5 ms {"service":"booking-api"}
Found 4 users
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /users. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: GET /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
DELETE request received on /:id
Host ID to delete: e2345678-90bc-def0-0123-456789abcdef
Attempting to delete host with ID: e2345678-90bc-def0-0123-456789abcdef
Attempting to delete host with id: e2345678-90bc-def0-0123-456789abcdef
info: DELETE /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 7 ms {"service":"booking-api"}
Host with id e2345678-90bc-def0-0123-456789abcdef successfully deleted.
Result from deleteHostById: {
  id: 'e2345678-90bc-def0-0123-456789abcdef',
  username: 'johnDoe_updated',
  password: 'lindaS123',
  name: 'John Doe Updated',
  email: 'updatedjohndoe@email.com',
  phoneNumber: '+11234567890',
  profilePicture: 'https://updated-example.com/images/johndoe.jpg',
  aboutMe: 'Updated bio for John Doe'
}
Host with ID: e2345678-90bc-def0-0123-456789abcdef successfully deleted
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
Searching for host with name: undefined
info: GET /hosts. Status: 200. Duration: 3 ms {"service":"booking-api"}
Found hosts: [
  {
    id: 'f1234567-89ab-cdef-0123-456789abcdef',
    username: 'johnDoe',
    password: 'johnDoe123',
    name: 'John Doe',
    email: 'johndoe@email.com',
    phoneNumber: '+11234567890',
    profilePicture: 'https://example.com/images/johndoe.jpg',
    aboutMe: "I'm a passionate traveler who loves to share my home with fellow explorers. Welcome!",
    properties: [ [Object] ]
  },
  {
    id: 'd3456789-01cd-def0-1234-56789abcdef0',
    username: 'mikeBrown',
    password: 'mikeB2023',
    name: 'Mike Brown',
    email: 'mikebrown@email.com',
    phoneNumber: '+13234567892',
    profilePicture: 'https://example.com/images/mikebrown.jpg',
    aboutMe: 'Nature enthusiast, hiker, and a lover of arts. My home reflects my passions. Stay and enjoy!',
    properties: [ [Object] ]
  },
  {
    id: 'c4567890-12de-f012-3456-789abcdef012',
    username: 'sarahLee',
    password: 'sarahL456',
    name: 'Sarah Lee',
    email: 'sarahlee@email.com',
    phoneNumber: '+14234567893',
    profilePicture: 'https://example.com/images/sarahlee.jpg',
    aboutMe: 'Travel blogger turned host. My home is filled with artifacts from around the world. Feel the global vibe!',
    properties: [ [Object] ]
  },
  {
    id: 'b5678901-23ef-0123-4567-89abcdef0123',
    username: 'paulGreen',
    password: 'greenP789',
    name: 'Paul Green',
    email: 'paulgreen@email.com',
    phoneNumber: '+15234567894',
    profilePicture: 'https://example.com/images/paulgreen.jpg',
    aboutMe: 'Engineer by profession, passionate about history. Stay in my vintage-themed home and relive the past.',
    properties: [ [Object] ]
  }
]
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /hosts. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: GET /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: DELETE /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: GET /properties. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
Creating property with data: {
  title: 'Cozy Mountain Retreat',
  description: 'Experience tranquility in our cozy cabin situated on a serene mountain peak.',
  location: 'Rocky Mountains, Colorado',
  pricePerNight: 120.5,
  bedroomCount: 3,
  bathRoomCount: 2,
  maxGuestCount: 5,
  hostId: 'f1234567-89ab-cdef-0123-456789abcdef',
  rating: 5
}
info: POST /properties. Status: 200. Duration: 7 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
GET request received for amenity with id: u3456789-01rs-tuvw-01cd-ef0123456789
info: GET /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 2 ms {"service":"booking-api"}
Amenity retrieved from database: { id: 'u3456789-01rs-tuvw-01cd-ef0123456789', name: 'Free Parking' }
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
DELETE request received for id: u3456789-01rs-tuvw-01cd-ef0123456789
info: DELETE /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 3 ms {"service":"booking-api"}
Amenity deletion result: u3456789-01rs-tuvw-01cd-ef0123456789
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
Fetching amanities...
info: GET /amenities. Status: 200. Duration: 3 ms {"service":"booking-api"}
Amenities fetched [
  { id: 'l4567890-12gh-ijkl-1234-56789abcdef0', name: 'Wifi' },
  { id: 'm5678901-23ij-klmn-2345-6789abcdef01', name: 'Gym' },
  { id: 'n6789012-34kl-mnop-3456-789abcdef012', name: 'Pool' },
  { id: 'o7890123-45lm-nopq-4567-89abcdef0123', name: 'Kitchen' },
  {
    id: 'p8901234-56mn-opqr-5678-9abcdef01234',
    name: 'Air Conditioning'
  },
  { id: 'q9012345-67no-pqrs-6789-abcdef012345', name: 'Heating' },
  { id: 'r0123456-78op-qrst-789a-bcdef0123456', name: 'Washer' },
  { id: 's1234567-89pq-rstu-89ab-cdef01234567', name: 'Dryer' },
  { id: 't2345678-90qr-stuv-90bc-def012345678', name: 'TV' }
]
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /amenities. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
GET booking by id: f0123456-78ab-cdef-0123-456789abcdef
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 4 ms {"service":"booking-api"}
Booking retrieved: {
  id: 'f0123456-78ab-cdef-0123-456789abcdef',
  checkinDate: 2023-03-10T18:00:00.000Z,
  checkoutDate: 2023-03-15T10:00:00.000Z,
  numberOfGuests: 2,
  totalPrice: 150.25,
  bookingStatus: 'confirmed',
  propertyId: 'g9012345-67ef-0123-4567-89abcdef0123',
  userId: 'a1234567-89ab-cdef-0123-456789abcdef'
}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 5 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
DELETE booking with id: f0123456-78ab-cdef-0123-456789abcdef
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 5 ms {"service":"booking-api"}
Booking deletion result: {
  id: 'f0123456-78ab-cdef-0123-456789abcdef',
  checkinDate: 2023-03-11T18:00:00.000Z,
  checkoutDate: 2023-03-16T10:00:00.000Z,
  numberOfGuests: 3,
  totalPrice: 200.75,
  bookingStatus: 'updated',
  propertyId: 'g9012345-67ef-0123-4567-89abcdef0123',
  userId: 'a1234567-89ab-cdef-0123-456789abcdef'
}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: GET /bookings. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /bookings. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: GET /reviews. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /reviews. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
GET /users/:id - Request received: { params: { id: ':userId' } }
info: GET /users/:userId. Status: 200. Duration: 3 ms {"service":"booking-api"}
User found: No
User with id :userId not found
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /users/d4567890-12. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: DELETE /users/d4567890-12ef-01. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /users. Status: 400. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: GET /hosts/:hostId. Status: 200. Duration: 1 ms {"service":"booking-api"}
Host with id :hostId not found.
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: PUT /hosts/:hostId. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
DELETE request received on /:id
Host ID to delete: :hostId
Attempting to delete host with ID: :hostId
Attempting to delete host with id: :hostId
info: DELETE /hosts/:hostId. Status: 200. Duration: 4 ms {"service":"booking-api"}
Host with id :hostId does not exist.
Result from deleteHostById: null
Host with ID: :hostId not found for deletion
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /hosts. Status: 400. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: GET /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: PUT /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: DELETE /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /properties. Status: 400. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
GET request received for amenity with id: t2345678-90qr-stu
info: GET /amenities/t2345678-90qr-stu. Status: 200. Duration: 1 ms {"service":"booking-api"}
Amenity retrieved from database: null
Amenity with id t2345678-90qr-stu was not found
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /amenities/t2345678-90qr-st. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
DELETE request received for id: bc-def012345678
info: DELETE /amenities/bc-def012345678. Status: 200. Duration: 2 ms {"service":"booking-api"}
Amenity deletion result: null
Amenity with id bc-def012345678 was not found for deletion.
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /amenities. Status: 400. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
GET booking by id: f0123456-78ab-cdef-0123-456789abcdef
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 3 ms {"service":"booking-api"}
Booking retrieved: null
Booking with id f0123456-78ab-cdef-0123-456789abcdef was not found.
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 5 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
DELETE booking with id: f0123456-78ab-cdef-0123-456789abcdef
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 4 ms {"service":"booking-api"}
Booking with ID f0123456-78ab-cdef-0123-456789abcdef not found.
Booking deletion result: null
Booking with id f0123456-78ab-cdef-0123-456789abcdef was not found for deletion.
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /bookings. Status: 400. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 3 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /reviews. Status: 400. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 401. Duration: 1 ms {"service":"booking-api"}
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
(node:3128) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3001
Database connection successful

=>oude uitslag...========================================================================================================================
Microsoft Windows [Version 10.0.22631.4460]
(c) Microsoft Corporation. Alle rechten voorbehouden.

C:\BED_Final\BED-Final_Booking-Api-004-045>npm run dev

> express-bookings@1.0.0 dev
> nodemon src/index.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
(node:11908) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3001
Database connection successful
info: POST /login. Status: 200. Duration: 6 ms {"service":"booking-api"}
GET /users/:id - Request received: { params: { id: 'e5678901-23f0-1234-5678-9abcdef01234' } }
info: GET /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 5 ms {"service":"booking-api"}
User found: Yes
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: PUT /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
DELETE /users/:id - Request received: { params: { id: 'e5678901-23f0-1234-5678-9abcdef01234' } }
deleteUser: Function called with id: e5678901-23f0-1234-5678-9abcdef01234
Attempting to delete user with id: e5678901-23f0-1234-5678-9abcdef01234
info: DELETE /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 4 ms {"service":"booking-api"}
Delete result: { count: 1 }
User deletion result: Success
User e5678901-23f0-1234-5678-9abcdef01234 successfully deleted
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
GET /users - Request received: { query: {} }
info: GET /users. Status: 200. Duration: 2 ms {"service":"booking-api"}
Found 4 users
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /users. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: GET /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: PUT /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
DELETE request received on /:id
Host ID to delete: e2345678-90bc-def0-0123-456789abcdef
Attempting to delete host with ID: e2345678-90bc-def0-0123-456789abcdef
Attempting to delete host with id: e2345678-90bc-def0-0123-456789abcdef
info: DELETE /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 3 ms {"service":"booking-api"}
Host with id e2345678-90bc-def0-0123-456789abcdef successfully deleted.
Result from deleteHostById: {
  id: 'e2345678-90bc-def0-0123-456789abcdef',
  username: 'johnDoe_updated',
  password: 'lindaS123',
  name: 'John Doe Updated',
  email: 'updatedjohndoe@email.com',
  phoneNumber: '+11234567890',
  profilePicture: 'https://updated-example.com/images/johndoe.jpg',
  aboutMe: 'Updated bio for John Doe'
}
Host with ID: e2345678-90bc-def0-0123-456789abcdef successfully deleted
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
Searching for host with name: undefined
info: GET /hosts. Status: 200. Duration: 2 ms {"service":"booking-api"}
Found hosts: [
  {
    id: 'f1234567-89ab-cdef-0123-456789abcdef',
    username: 'johnDoe',
    password: 'johnDoe123',
    name: 'John Doe',
    email: 'johndoe@email.com',
    phoneNumber: '+11234567890',
    profilePicture: 'https://example.com/images/johndoe.jpg',
    aboutMe: "I'm a passionate traveler who loves to share my home with fellow explorers. Welcome!",
    properties: [ [Object] ]
  },
  {
    id: 'd3456789-01cd-def0-1234-56789abcdef0',
    username: 'mikeBrown',
    password: 'mikeB2023',
    name: 'Mike Brown',
    email: 'mikebrown@email.com',
    phoneNumber: '+13234567892',
    profilePicture: 'https://example.com/images/mikebrown.jpg',
    aboutMe: 'Nature enthusiast, hiker, and a lover of arts. My home reflects my passions. Stay and enjoy!',
    properties: [ [Object] ]
  },
  {
    id: 'c4567890-12de-f012-3456-789abcdef012',
    username: 'sarahLee',
    password: 'sarahL456',
    name: 'Sarah Lee',
    email: 'sarahlee@email.com',
    phoneNumber: '+14234567893',
    profilePicture: 'https://example.com/images/sarahlee.jpg',
    aboutMe: 'Travel blogger turned host. My home is filled with artifacts from around the world. Feel the global vibe!',
    properties: [ [Object] ]
  },
  {
    id: 'b5678901-23ef-0123-4567-89abcdef0123',
    username: 'paulGreen',
    password: 'greenP789',
    name: 'Paul Green',
    email: 'paulgreen@email.com',
    phoneNumber: '+15234567894',
    profilePicture: 'https://example.com/images/paulgreen.jpg',
    aboutMe: 'Engineer by profession, passionate about history. Stay in my vintage-themed home and relive the past.',
    properties: [ [Object] ]
  }
]
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /hosts. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: GET /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 0 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: PUT /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: DELETE /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: GET /properties. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
Creating property with data: {
  title: 'Cozy Mountain Retreat',
  description: 'Experience tranquility in our cozy cabin situated on a serene mountain peak.',
  location: 'Rocky Mountains, Colorado',
  pricePerNight: 120.5,
  bedroomCount: 3,
  bathRoomCount: 2,
  maxGuestCount: 5,
  hostId: 'f1234567-89ab-cdef-0123-456789abcdef',
  rating: 5
}
info: POST /properties. Status: 200. Duration: 4 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
GET request received for amenity with id: u3456789-01rs-tuvw-01cd-ef0123456789
info: GET /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 0 ms {"service":"booking-api"}
Amenity retrieved from database: { id: 'u3456789-01rs-tuvw-01cd-ef0123456789', name: 'Free Parking' }
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
PUT request received for id: u3456789-01rs-tuvw-01cd-ef0123456789, name: Updated Wifi
info: PUT /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 2 ms {"service":"booking-api"}
Amenity update result: { id: 'u3456789-01rs-tuvw-01cd-ef0123456789', name: 'Updated Wifi' }
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
DELETE request received for id: u3456789-01rs-tuvw-01cd-ef0123456789
info: DELETE /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 2 ms {"service":"booking-api"}
Amenity deletion result: u3456789-01rs-tuvw-01cd-ef0123456789
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
Fetching amanities...
info: GET /amenities. Status: 200. Duration: 2 ms {"service":"booking-api"}
Amenities fetched [
  { id: 'l4567890-12gh-ijkl-1234-56789abcdef0', name: 'Wifi' },
  { id: 'm5678901-23ij-klmn-2345-6789abcdef01', name: 'Gym' },
  { id: 'n6789012-34kl-mnop-3456-789abcdef012', name: 'Pool' },
  { id: 'o7890123-45lm-nopq-4567-89abcdef0123', name: 'Kitchen' },
  {
    id: 'p8901234-56mn-opqr-5678-9abcdef01234',
    name: 'Air Conditioning'
  },
  { id: 'q9012345-67no-pqrs-6789-abcdef012345', name: 'Heating' },
  { id: 'r0123456-78op-qrst-789a-bcdef0123456', name: 'Washer' },
  { id: 's1234567-89pq-rstu-89ab-cdef01234567', name: 'Dryer' },
  { id: 't2345678-90qr-stuv-90bc-def012345678', name: 'TV' }
]
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /amenities. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
GET booking by id: f0123456-78ab-cdef-0123-456789abcdef
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"booking-api"}
Booking retrieved: {
  id: 'f0123456-78ab-cdef-0123-456789abcdef',
  userId: 'a1234567-89ab-cdef-0123-456789abcdef',
  propertyId: 'g9012345-67ef-0123-4567-89abcdef0123',
  checkinDate: 2023-03-10T18:00:00.000Z,
  checkoutDate: 2023-03-15T10:00:00.000Z,
  numberOfGuests: 2,
  totalPrice: 150.25,
  bookingStatus: 'confirmed'
}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
PUT update booking id=f0123456-78ab-cdef-0123-456789abcdef with data: {
  checkinDate: '2023-03-11T18:00:00.000Z',
  checkoutDate: '2023-03-16T10:00:00.000Z',
  numberOfGuests: 3,
  totalPrice: 200.75,
  bookingStatus: 'updated'
}
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 3 ms {"service":"booking-api"}
Booking update result: {
  id: 'f0123456-78ab-cdef-0123-456789abcdef',
  userId: 'a1234567-89ab-cdef-0123-456789abcdef',
  propertyId: 'g9012345-67ef-0123-4567-89abcdef0123',
  checkinDate: '2023-03-11T18:00:00.000Z',
  checkoutDate: '2023-03-16T10:00:00.000Z',
  numberOfGuests: 3,
  totalPrice: 200.75,
  bookingStatus: 'updated'
}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
DELETE booking with id: f0123456-78ab-cdef-0123-456789abcdef
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"booking-api"}
Booking deletion result: {
  id: 'f0123456-78ab-cdef-0123-456789abcdef',
  userId: 'a1234567-89ab-cdef-0123-456789abcdef',
  propertyId: 'g9012345-67ef-0123-4567-89abcdef0123',
  checkinDate: 2023-03-11T18:00:00.000Z,
  checkoutDate: 2023-03-16T10:00:00.000Z,
  numberOfGuests: 3,
  totalPrice: 200.75,
  bookingStatus: 'updated'
}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
GET bookings: userId=undefined, propertyId=undefined
info: GET /bookings. Status: 200. Duration: 0 ms {"service":"booking-api"}
Bookings retrieved: [
  {
    id: 'e2345678-90ab-cdef-0123-456789abcdef',
    userId: 'b2345678-90cd-ef01-2345-6789abcdef01',
    propertyId: 'g9012345-67ef-0123-4567-89abcdef0123',
    checkinDate: 2023-04-12T16:00:00.000Z,
    checkoutDate: 2023-04-19T11:00:00.000Z,
    numberOfGuests: 3,
    totalPrice: 220,
    bookingStatus: 'pending'
  }
]
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /bookings. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: GET /reviews. Status: 200. Duration: 0 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /reviews. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
GET /users/:id - Request received: { params: { id: ':userId' } }
info: GET /users/:userId. Status: 200. Duration: 2 ms {"service":"booking-api"}
User found: No
User with id :userId not found
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: PUT /users/d4567890-12. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
DELETE /users/:id - Request received: { params: { id: 'd4567890-12ef-01' } }
deleteUser: Function called with id: d4567890-12ef-01
Attempting to delete user with id: d4567890-12ef-01
info: DELETE /users/d4567890-12ef-01. Status: 200. Duration: 3 ms {"service":"booking-api"}
Delete result: { count: 0 }
User deletion result: Not Found
Deletion failed - User d4567890-12ef-01 not found
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /users. Status: 400. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: GET /hosts/:hostId. Status: 200. Duration: 0 ms {"service":"booking-api"}
Host with id :hostId not found.
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /hosts/:hostId. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
DELETE request received on /:id
Host ID to delete: :hostId
Attempting to delete host with ID: :hostId
Attempting to delete host with id: :hostId
info: DELETE /hosts/:hostId. Status: 200. Duration: 3 ms {"service":"booking-api"}
Host with id :hostId does not exist.
Result from deleteHostById: null
Host with ID: :hostId not found for deletion
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /hosts. Status: 400. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: GET /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 0 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: PUT /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: DELETE /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /properties. Status: 400. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
GET request received for amenity with id: t2345678-90qr-stu
info: GET /amenities/t2345678-90qr-stu. Status: 200. Duration: 1 ms {"service":"booking-api"}
Amenity retrieved from database: null
Amenity with id t2345678-90qr-stu was not found
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
PUT request received for id: t2345678-90qr-st, name: Updated Wifi
info: PUT /amenities/t2345678-90qr-st. Status: 200. Duration: 3 ms {"service":"booking-api"}
Amenity update result: null
Amenity with id t2345678-90qr-st was not found for update.
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
DELETE request received for id: bc-def012345678
info: DELETE /amenities/bc-def012345678. Status: 200. Duration: 1 ms {"service":"booking-api"}
Amenity deletion result: null
Amenity with id bc-def012345678 was not found for deletion.
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /amenities. Status: 400. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
GET booking by id: f0123456-78ab-cdef-0123-456789abcdef
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"booking-api"}
Booking retrieved: null
Booking with id f0123456-78ab-cdef-0123-456789abcdef was not found.
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
PUT update booking id=f0123456-78ab-cdef-0123-456789abcdef with data: {
  checkinDate: '2023-03-11T18:00:00.000Z',
  checkoutDate: '2023-03-16T10:00:00.000Z',
  numberOfGuests: 3,
  totalPrice: 200.75,
  bookingStatus: 'updated'
}
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 3 ms {"service":"booking-api"}
Booking update result: null
Booking with id f0123456-78ab-cdef-0123-456789abcdef was not found for update.
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
DELETE booking with id: f0123456-78ab-cdef-0123-456789abcdef
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 2 ms {"service":"booking-api"}
Booking with ID f0123456-78ab-cdef-0123-456789abcdef not found.
Booking deletion result: null
Booking with id f0123456-78ab-cdef-0123-456789abcdef was not found for deletion.
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /bookings. Status: 400. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"booking-api"}
info: POST /reviews. Status: 400. Duration: 2 ms {"service":"booking-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"booking-api"}
info: POST /login. Status: 401. Duration: 0 ms {"service":"booking-api"}
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
(node:4400) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3001
Database connection successful
