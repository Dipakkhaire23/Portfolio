// // api/github-contributions.js

// const GITHUB_API_URL = "https://api.github.com/graphql";

// module.exports = async (req, res) => {
//   const { username } = req.query;

//   if (!username) {
//     return res.status(400).json({ error: "Missing username" });
//   }

//   const query = `
//     query($login: String!) {
//       user(login: $login) {
//         contributionsCollection {
//           contributionCalendar {
//             totalContributions
//             weeks {
//               contributionDays {
//                 date
//                 contributionCount
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   try {
//     const response = await fetch(GITHUB_API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
//       },
//       body: JSON.stringify({
//         query,
//         variables: { login: username },
//       }),
//     });

//     const data = await response.json();

//     if (data.errors) {
//       console.error("GitHub API errors:", data.errors);
//       return res.status(500).json({ error: "GitHub API error", details: data.errors });
//     }

//     const calendar =
//       data.data.user.contributionsCollection.contributionCalendar;

//     // Return only what frontend needs
//     return res.status(200).json(calendar);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Server error" });
//   }
// };
