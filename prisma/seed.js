import { PrismaClient } from "@prisma/client";
import amenityData from '../src/data/amenities.json' with { type: 'json' };
import bookingData from '../src/data/bookings.json' with { type: 'json' };
import hostData from '../src/data/hosts.json' with { type: 'json' };
import propertyData from '../src/data/properties.json' with { type: 'json' };
import reviewData from '../src/data/reviews.json' with { type: 'json' };
import userData from '../src/data/users.json' with { type: 'json' };

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"]
});

async function main() {
  
  const { users } = userData;
  const { bookings } = bookingData;
  const { properties } = propertyData;
  const { reviews } = reviewData;
  const { hosts } = hostData;
  const { amenities } = amenityData;

  console.log('Starting to seed database...');

  // Seed users
  console.log('Seeding users...');
  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: user,
    });
  }

  // Seed hosts
  console.log('Seeding hosts...');
  for (const host of hosts) {
    await prisma.host.upsert({
      where: { id: host.id },
      update: {},
      create: host,
    });
  }

  // Seed amenities
  console.log('Seeding amenities...');
  for (const amenity of amenities) {
    await prisma.amenity.upsert({
      where: { id: amenity.id },
      update: {},
      create: amenity,
    });
  }

  // Seed properties
  console.log('Seeding properties...');
  for (const property of properties) {
    await prisma.property.upsert({
      where: { id: property.id },
      update: {},
      create: property,
    });
  }

  // Seed bookings
  console.log('Seeding bookings...');
  for (const booking of bookings) {
    await prisma.booking.upsert({
      where: { id: booking.id },
      update: {},
      create: booking,
    });
  }

  // Seed reviews
  console.log('Seeding reviews...');
  for (const review of reviews) {
    await prisma.review.upsert({
      where: { id: review.id },
      update: {},
      create: review,
    });
    
  }
}
  
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});