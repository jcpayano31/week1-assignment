import people from "./people.json";

people.forEach(function ({ name, email, phone }) {
  const names = name.split(" ");
  const firstName = names[0];
  const lastName = names[1];

  console.log(`"first name: "  ${firstName} 'last Name' ${lastName}
          "Email: " ${email}
          "Phone number: " ${phone}  `);
});
