# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demoUser = User.create!(
  email: "demouser@gmail.com",
  password: "hunter12",
  username: "Demo User",
  age: "27",
  first_name: "Demo",
  last_name: "User",
  about_you: "Demo login user",
  location: "NYC",
)

# demoPin = Pin.create!(
#   title: "Demo Pin",
#   description: "testing demo pin data",
#   user_id: "1",
# )

# demoBoard = Board.create!(
#   title: "Demo Board",
#   creator_id: "1",
# )