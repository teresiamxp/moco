function showLeaderboard() {
  // Get the leaderboard from the database
  const leaderboard = await db.collection('leaderboard').orderBy('score', 'desc').limit(10).get();

  // Create a table to display the leaderboard
  const table = document.createElement('table');
  table.classList.add('leaderboard');

  // Create the table header
  const headerRow = document.createElement('tr');
  const headerRank = document.createElement('th');
  headerRank.innerText = 'Rank';
  const headerName = document.createElement('th');
  headerName.innerText = 'Name';
  const headerScore = document.createElement('th');
  headerScore.innerText = 'Score';
  headerRow.appendChild(headerRank);
  headerRow.appendChild(headerName);
  headerRow.appendChild(headerScore);
  table.appendChild(headerRow);

  // Add the leaderboard data to the table
  let rank = 1;
  leaderboard.forEach(doc => {
    const data = doc.data();
    const row = document.createElement('tr');
    const rankCell = document.createElement('td');
    rankCell.innerText = rank++;
    const nameCell = document.createElement('td');
    nameCell.innerText = data.name;
    const scoreCell = document.createElement('td');
    scoreCell.innerText = data.score;
    row.appendChild(rankCell);
    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    table.appendChild(row);
  });

  // Add the table to the DOM
  const leaderboardContainer = document.getElementById('leaderboard-container');
  leaderboardContainer.appendChild(table);
}
