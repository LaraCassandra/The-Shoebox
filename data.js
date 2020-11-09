var shoesArray = [
    { id: "1", brand: "Nike", gender: "Men's Shoe", name: "Air Force 1 '07", price: "1699.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/uoxteud0rv2d2wml9xkl/air-force-1-07-shoe-6jXPDp.jpg", description: "The Nike Air Force 1 '07 is the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to let you shine.", favourite: "true" },
    { id: "2", brand: "Nike", gender: "Men's Shoe", name: "Zoom Fly 3", price: "2899.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/897456d5-18f8-479b-899c-3938e67ddc20/zoom-fly-3-running-shoe-9SdJdh.jpg", description: "Inspired by the Vaporfly, the Nike Zoom Fly 3 gives distance runners race-day comfort and durability. The power of a carbon-fibre plate keeps you in the running mile after mile.", favourite: "false"},
    { id: "3", brand: "Nike", gender: "Men's Shoe", name: "Air Max Plus", price: "2899.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/7c0968bd-edc8-4792-9c74-116a88e18700/air-max-plus-shoe-XKsjSR.jpg", description: "Let your attitude make a splash with the Nike Air Max Plus, a 'Tuned' Air experience offering premium stability and support. Featuring crisp neutral colours and the OG's wavy design lines, it celebrates the past while taking you boldly into the future.", favourite: "false"},
    { id: "4", brand: "Nike", gender: "Men's Shoe", name: "Air Max 270", price: "2499.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/skwgyqrbfzhu6uyeh0gg/air-max-270-shoe-nnTrqDGR.jpg", description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.", favourite: "true"},
    { id: "5", brand: "Nike", gender: "Men's Shoe", name: "React Infinity Run Flyknit", price: "2700", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/23d7a7ad-d210-416e-af02-5f57b7c17220/react-infinity-run-flyknit-running-shoe-4jHr6L.jpg", description: "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.", favourite: "false"},
    { id: "6", brand: "Nike", gender: "Women's Shoe", name: "SuperRep Go", price: "1699.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/b99990f6-a0af-438b-ab58-4038402d0bd2/superrep-go-training-shoe-4RH1PB.jpg", description: "The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in fitness classes or while streaming workouts at home.", favourite: "false"},
    { id: "7", brand: "Nike", gender: "Women's Shoe", name: "Blazer Mid Vintage '77", price: "1599.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/34df7e1a-9aea-40a4-a1d1-1fe5851c36de/blazer-mid-vintage-77-shoe-hZ9zks.jpg", description: "Rep the Nike Blazer Mid Vintage '77, the hardwood classic refreshed with sweet colours. Leather provides a premium look and adds durability to this hoops icon.", favourite: "false"},
    { id: "8", brand: "Nike", gender: "Women's Shoe", name: "Air Zoom Alphafly NEXT%", price: "5299.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/08dc1d61-3ed3-4287-b1df-37abd1a001e2/air-zoom-alphafly-next-racing-shoe-g2tqPZ.jpg", description: "Gear up for your next personal best with the Nike Air Zoom Alphafly NEXT%. Responsive foam is combined with 2 Zoom Air units to push your running game forwards for your next marathon or road race.", favourite: "false"},
    { id: "9", brand: "Nike", gender: "Women's Shoe", name: "Kybrid S2", price: "2199.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/5ab3f46b-c6d6-43c7-9989-9b5e9aa0bfd5/kybrid-s2-basketball-shoe-3jTHbF.jpg", description: "The Kybrid S2 combines the best of the Kyrie 4, 5 and 6 into one sensational, boundary-pushing basketball shoe. It provides a secure, lightweight fit with an overlay that locks you in when you lace up. A Kyrie-ready Zoom Air unit and traction that wraps up the sides help fast, quick-cutting players stay responsive and turn on their edges.", favourite: "false"},
    { id: "10", brand: "Nike", gender: "Kids Shoe",  name: "Air VaporMax 2020", price: "3299.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/d68c62b3-e7ac-40e3-adf9-257e38ded30c/air-vapormax-2020-older-shoe-2qrpkx.jpg", description: "Add some pep to your step in the Nike Air VaporMax 2020. The unique Air shape stretches from heel to toe for an out-of-this-world look that feels like you're walking on air. Flyknit construction wraps your foot in soft comfort and style that stands out amongst the crowd.", favourite: "false"},
    { id: "11", brand: "Nike", gender: "Kids Shoe",  name: "Air Zoom Speed", price: "1299.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/ea3bae84-bf2a-41a4-b63a-d1e9080c90d6/air-zoom-speed-younger-older-running-shoe-JnhB6z.jpg", description: "Look fast and feel faster in the Nike Air Zoom Speed. Our iconic Zoom Air pods are made just right for kids. So lightweight all around and cushioned where you need it, you'll be zooming around the neighbourhood and track in no time.", favourite: "true"},
    { id: "12", brand: "Nike", gender: "Kids Shoe",  name: "Air Max Plus", price: "2399.95", image: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/i1-c3ae5b22-4587-4b56-a133-d8b68a6a9ae8/air-max-plus-older-shoe-VWK3gG.jpg", description: "The Nike Air Max Plus brings you legendary 'Tuned' Air cushioning for extra comfort. It keeps the original inspiration: wavy lines that look like palm leaves and a whale's tail near the bottom.", favourite: "false"},
];

var contact = {
    Telephone: "(011) 123 45678",
    Email: "Info@shoebox.com",
    Address: "John Vorster Drive Ext. Southdowns.",
    Complaints: "Mary@shoebox.com"
};

var reviews = [
    {name: "Kyle", shoeId: "1", starRating: "5", comment: "Great quality, they have been my go to shoes since I bought them!"},
    {name: "Hansen", shoeId: "1", starRating: "3", comment: "Pretty neat."},
    {name: "Harry", shoeId: "2", starRating: "4", comment: "I like these shoes a lot but I think they get dirty really fast and the colour fades"},
    {name: "Michael", shoeId: "2", starRating: "5", comment: "These are amazing! I love the vibrant colors! And its like running on a cloud!!"},
    {name: "Michael", shoeId: "3", starRating: "3", comment: "Not for me, I didn't expect them to be so chunky.."},
    {name: "Kevin", shoeId: "3", starRating: "4", comment: "I like the shoes"},
    {name: "Liam", shoeId: "3", starRating: "5", comment: "Good quality"},
    {name: "Roger", shoeId: "4", starRating: "5", comment: "Got these for my birthday, they're so great I had to write a review to let other people know how great they are!!!!!!!!"},
    {name: "John", shoeId: "4", starRating: "3", comment: "Hurt my feet, too narrow"},
    {name: "Will", shoeId: "5", starRating: "4", comment: "I think these are good but they always give me blisters after long distance running"},
    {name: "Todd", shoeId: "5", starRating: "5", comment: "Really like them"},
    {name: "Oscar", shoeId: "5", starRating: "4", comment: "Cant wait to try these out! Ordered them yesterday!"},
    {name: "Mary", shoeId: "6", starRating: "5", comment: "Love love love!!"},
    {name: "Sandy", shoeId: "6", starRating: "4", comment: "Im mostly happy but leaves something to be desired"},
    {name: "Melanie", shoeId: "7", starRating: "3", comment: "Okay i guess"},
    {name: "Lilly", shoeId: "7", starRating: "2", comment: "I don't like these, they're very uncomfortable"},
    {name: "Nina", shoeId: "8", starRating: "1", comment: "No, the sizing is all wrong! I order my normal size but they don't fit at all"},
    {name: "Michelle", shoeId: "9", starRating: "5", comment: "Good"},
    {name: "Casey", shoeId: "9", starRating: "4", comment: "Super comfortable. I am a happy basketball player"},
    {name: "Themba", shoeId: "9", starRating: "3", comment: "These are really ugly"},
    {name: "Ivan", shoeId: "10", starRating: "3", comment: "Cool but theres nothing really standing out for me about these shoes"},
    {name: "Evelyn", shoeId: "10", starRating: "3", comment: "They look too boyish for me I guess"},
    {name: "Grant", shoeId: "11", starRating: "5", comment: "I bought these for my sister, they look really great and she hasnt complained so thats a win in my books"},
    {name: "Luke", shoeId: "12", starRating: "4", comment: "Funky!!"},
    {name: "Britney", shoeId: "12", starRating: "4", comment: "Im loving this style, it suits me alot"},
]

var comments = [
    {name: "Teddy", email: "Teddy@gmail.com", starRating: "5", comment: "Great service! The delivery was very fast.."},
    {name: "John", email: "John@gmail.com", starRating: "3", comment: "No one replied to my email about a refund but the shoes are good and it was fast"},
    {name: "Melanie", email: "melanie@gmail.com", starRating: "4", comment: "My dad loves his new shoes"},
    {name: "Jenny", email: "JSmith@gmail.com", starRating: "5", comment: "Large variety! Very happy!"}
];
